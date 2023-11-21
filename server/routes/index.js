// import { Router, response } from "express";
// import CamerasData from "../models/camerasData.js";
// import cameras from "../models/cameras.js";
// import users from "../models/users.js";
// const router = Router();

// import { Auth, noAuth } from "../middlewares/authCheck.middleware.js";

// router.get("/home", Auth, (req, res) => {
//   res.json({ session: req.session });
// });

// router.post("/signin", async (req, res) => {
//   const { email, password } = req.body;

//   if (email && password) {
//     const data = await users.find({
//       where: { userEmail: email, password: password },
//     });

//     if (
//       data.length > 0 &&
//       data[0].userEmail.toLowerCase() === email.toLowerCase() &&
//       data[0].password === password
//     ) {
//       res.status(200).json({ msg: "Successful Login" });
//     } else {
//       res.status(401).json({ msg: "Invalid email or password" });
//     }
//   }
// });

// router.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;
//   console.log(name, email, password);
//   if (name && email && password) {
//     await users.create({
//       name: name,
//       userEmail: email,
//       password: password,
//     });
//     res.status(200).json({ msg: "registered successfully!" });
//   }
// });

// router.get("/signout", (request, response) => {
//   request.session.destroy();
//   response.redirect("/");
// });

// router.post("/cameraIp", async (req, res) => {
//   const { cameraIp } = req.body;
//   console.log(cameraIp);

//   await cameras.create({ CameraIP: cameraIp, userId: "" });
//   res.status(200).json({ msg: "successfully created new cameraIp" });
// });

// router.get("/cameraIp", async (req, res) => {
//   const data = await cameras.find({});
//   console.log(data);
//   res.status(200).json({ msg: "successfully get All Ips", data: data });
// });

// // API for receiving data from camera
// router.get("/updateData/:CameraIp/:PersonIn/:PersonOut", async (req, res) => {
//   const { CameraIp, PersonIn, PersonOut } = req.params;
//   // const sanitizedTitle = String(title);
//   await CamerasData.create({
//     CameraIp: CameraIp,
//     PersonIn: PersonIn,
//     PersonOut: PersonOut,
//   });
//   res.send("Database Updated!!");
// });

// // Retrives data from db and send to frontend
// router.get("/sendData/:cIp", async (req, res) => {
//   const cIp = req.params;
//   const db_data = await CamerasData.find({ CameraIp: cIp }).sort({
//     created: -1,
//   });
//   res.json({ data: db_data });
// });
// // work same as above
// // using this
// router.get("/getData/:CameraIp", async (req, res) => {
//   const { CameraIp } = req.params;
//   const data = await CamerasData.find({ CameraIp: CameraIp }).sort({
//     created: -1,
//   });

//   // Group data by hour
//   const dataByHour = {};
//   data.forEach((item) => {
//     const hour = new Date(item.date).getHours();
//     if (!dataByHour[hour]) {
//       dataByHour[hour] = {
//         PersonIn: 0,
//         PersonOut: 0,
//       };
//     }
//     dataByHour[hour].PersonIn += item.PersonIn;
//     dataByHour[hour].PersonOut += item.PersonOut;
//   });

//   // Calculate counts for each hour
//   const count = [];
//   for (let i = 0; i < 24; i++) {
//     const hourData = dataByHour[i] || { PersonIn: 0, PersonOut: 0 };
//     const hourCount = hourData.PersonIn - hourData.PersonOut;
//     count.push(hourCount);
//   }

//   console.log(count); // Output: array containing counts for each hour

//   res.json({ data: data, count: count });
// });

// // Retrives data from db and send to frontend
// router.get("/getData", async (req, res) => {
//   // const cIp = req.params;
//   const db_data = await CamerasData.find({}).sort({
//     created: -1,
//   });
//   res.json({ data: db_data });
// });

// // adding new camera source to db
// router.post("/addNewSource/:uId", async (req, res) => {
//   const uId = req.params;
//   console.log(uId);
//   const cIp = req.body;
//   console.log(cIp);
//   await cameras.create({ CameraIp: cIp, userId: uId });
// });

// // for horly chart
// router.get("/getData/:CameraIp/:StartTime/:EndTime", async (req, res) => {
//   const { CameraIp, StartTime, EndTime } = req.params;

//   const data = await CamerasData.find({
//     CameraIp: CameraIp,
//     created: { $gte: StartTime, $lte: EndTime },
//   }).sort({ created: -1 });

//   const count = [];
//   data.forEach((item) => {
//     count.push(item.PersonIn - item.PersonOut);
//   });
//   console.log(`${CameraIp},${StartTime}, ${EndTime} got data coun = ${count}`);
//   res.json({ data: data, count: count });
// });

// router.get("/getData/:CameraIp/:day", async (req, res) => {
//   const { CameraIp, day } = req.params;
//   const [month, date, year] = day.split("/");
//   const formattedDay = `${year}-${month}-${date}`;
//   const startDate = new Date(`${formattedDay}T00:00:00.000Z`);
//   const endDate = new Date(`${formattedDay}T23:59:59.999Z`);

//   const data = await CamerasData.find({
//     CameraIp: CameraIp,
//     created: { $gte: startDate, $lte: endDate },
//   }).sort({ created: -1 });

//   // Group data by hour
//   const dataByHour = {};
//   data.forEach((item) => {
//     const hour = new Date(item.date).getHours();
//     if (!dataByHour[hour]) {
//       dataByHour[hour] = {
//         PersonIn: 0,
//         PersonOut: 0,
//       };
//     }
//     dataByHour[hour].PersonIn += item.PersonIn;
//     dataByHour[hour].PersonOut += item.PersonOut;
//   });

//   // Calculate counts for each hour
//   const count = [];
//   for (let i = 0; i < 24; i++) {
//     const hourData = dataByHour[i] || { PersonIn: 0, PersonOut: 0 };
//     const hourCount = hourData.PersonIn - hourData.PersonOut;
//     count.push(hourCount)//   }

//   console.log(count); // Output: array containing counts for each hour

//   res.json({ data: data, count: count });
// });

// export default router;
