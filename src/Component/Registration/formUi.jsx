import React from 'react';
import logo from "../../assets/image/image 1.png";
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from '@mui/material';

const FormUi = ({ handleBlur, handleChange, handleSubmit, touched, errors, values }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md max-w-lg md:max-w-2xl mx-auto mt-8">
      <div className="text-center mb-6">
        <img src={logo} alt="Brand Logo" className="mx-auto h-12 md:h-16 w-auto" />
        <h2 className="font-poppin font-semibold text-2xl md:text-4xl mt-4 md:mt-10 text-[#5C0627] text-left">
          Register for the Book Fair Event
        </h2>
      </div>
      <div className="mb-4">
        <p className="font-poppin text-sm md:text-base font-semibold text-[#797274]">
          Date of event : 19th - 22nd June
        </p>
        <p className="font-poppin text-sm md:text-base font-semibold text-[#797274]">
          Address: 876st, Pragati Maidan, 226068
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile Number"
            variant="outlined"
            value={values.mobileNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.mobileNumber && Boolean(errors.mobileNumber)}
            helperText={touched.mobileNumber && errors.mobileNumber}
          />
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            id="dob"
            name="dob"
            label="Date of Birth"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.dob && Boolean(errors.dob)}
            helperText={touched.dob && errors.dob}
          />
        </div>
        <div className="mb-4">
          <FormControl fullWidth variant="outlined" error={touched.gender && Boolean(errors.gender)}>
            <InputLabel>Gender</InputLabel>
            <Select
              id="gender"
              name="gender"
              value={values.gender}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Gender"
            >
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            {touched.gender && Boolean(errors.gender) && <FormHelperText>{errors.gender}</FormHelperText>}
          </FormControl>
        </div>
        <div className="mt-6">
          <Button
            fullWidth
            sx={{
              bgcolor: "#840033",
              padding: "14px 0",
              borderRadius: "50px",
              color: "white",
              "&:hover": { background: "#840033" },
            }}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormUi;
