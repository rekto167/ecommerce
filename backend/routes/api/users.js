const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const { check, validationResult } = require("express-validator");
// Model
const User = require("../../models/User");

// Register user
router.post(
  "/",
  [
    check("name", "Nama harus dimasukkan").not().isEmpty(),
    check("email", "Masukkan email yang valid").isEmail(),
    check("password", "Password minimal 6 karakter").isLength({ min: 6 }),
  ],
  async (req, res) => {
    //  cek validasi penginputan data yang dibutuhkan untuk registrasi
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // destructuring data yang di input
    const { name, email, password } = req.body;

    try {
      //    cek kalau sudha ada user nya yang didaftarkan
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User sudah terdaftar" }] });
      }
      //generate gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });
      //buat data user baru
      user = new User({ name, email, password, avatar });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server erorr");
    }
  }
);
module.exports = router;
