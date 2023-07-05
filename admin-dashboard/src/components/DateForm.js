import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";

export default function DateForm({ cameraIp }) {
  const formateDate = (date) => {
    return dayjs(date).format("H:M A");
  };

  const initialForm = {
    start: formateDate(new Date()),
    end: formateDate(new Date()),
    pickDate: new Date(),
  };
  const [form, setForm] = useState(initialForm);
  const handleTimeStart = (newValue) => {
    setForm({ ...form, start: newValue });
  };
  const handleTimeEnd = (newValue) => {
    setForm({ ...form, end: newValue });
  };

  const formateDate2 = (date) => {
    return dayjs(date).format("MM/DD/YYYY");
  };

  const makeGraph = async () => {
    console.log(formateDate2(form.pickDate));
    const res = await fetch(
      `http://localhost:4001/getData/${cameraIp}/${form.pickDate}`
    );

    const { data, count } = await res.json();

    console.log(data, count);
  };

  const handleDate = (newValue) => {
    setForm({ ...form, pickDate: newValue });
    makeGraph();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    console.log(cameraIp);
    const res = await fetch(
      `http://localhost:4001/getData/${cameraIp}/${form.start}/${form.end}`
    );

    const { data, count } = await res.json();

    console.log(data, count);
  };

  return (
    <Card sx={{ minWidth: 275, marginTop: 3 }}>
      <CardContent>
        <Typography variant="h6">Input Date</Typography>
        <form onSubmit={handleSubmit}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Start Time"
              value={form.start}
              onChange={handleTimeStart}
              renderInput={(params) => (
                <TextField sx={{ marginRight: 5 }} {...params} size="small" />
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="End Time"
              value={form.end}
              onChange={handleTimeEnd}
              renderInput={(params) => (
                <TextField sx={{ marginRight: 5 }} {...params} size="small" />
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              inputFormat="MM/DD/YYYY"
              value={form.pickDate}
              onChange={handleDate}
              renderInput={(params) => (
                <TextField sx={{ marginRight: 5 }} {...params} size="small" />
              )}
            />
          </LocalizationProvider>

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
