import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function ResourceForm({ fetchResource }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = {
      cameraIp: data.get("cameraIp"),
    };
    console.log({
      cameraIp: data.get("cameraIp"),
    });
    const res = await fetch("http://localhost:4001/cameraIp", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.ok) {
      fetchResource();
    }
  };
  return (
    <Card sx={{ minWidth: 275, marginTop: 4 }}>
      <CardContent>
        <Typography variant="h6">Add New Resource</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            label="Resource"
            variant="outlined"
            size="small"
            name="cameraIp"
            // value={form.description}
            // onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
