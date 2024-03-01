import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { DatePicker } from '@mui/lab';

const TravelPlans = () => {
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleLocationChange = async (value) => {
    setLocation(value);
    try {
      const response = await axios.get(
        `http://api.geonames.org/searchJSON?q=${value}&maxRows=5&username=hpatter9`
      );
      setSuggestions(response.data.geonames);
    } catch (error) {
      console.error('Error fetching location suggestions:', error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setLocation(`${suggestion.name}, ${suggestion.countryName}`);
    setSuggestions([]);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('/api/travel-itinerary', values);
      console.log(response.data); // Assuming your backend returns some data
      resetForm();
    } catch (error) {
      console.error('Error submitting data:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Travel Itinerary Form</h2>
      <Formik
        initialValues={{ location: '', startDate: null, endDate: null }}
        validationSchema={Yup.object({
          location: Yup.string().required('Location is required'),
          startDate: Yup.date().required('Start Date is required'),
          endDate: Yup.date().required('End Date is required'),
        })}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, handleChange, handleBlur }) => (
          <Form>
            <label>
              Location:
              <Field
                type="text"
                name="location"
                placeholder="Enter city or country"
                value={location}
                onChange={(e) => handleLocationChange(e.target.value)}
                onBlur={handleBlur}
              />
              <ErrorMessage name="location" component="div" />
              {suggestions.length > 0 && (
                <ul>
                  {suggestions.map((suggestion) => (
                    <li key={suggestion.geonameId} onClick={() => handleSuggestionClick(suggestion)}>
                      {`${suggestion.name}, ${suggestion.countryName}`}
                    </li>
                  ))}
                </ul>
              )}
            </label>
            <label>
              Start Date:
              <DatePicker
                name="startDate"
                format="yyyy-MM-dd"
                value={values.startDate}
                onChange={(date) => setFieldValue('startDate', date)}
              />
              <ErrorMessage name="startDate" component="div" />
            </label>
            <label>
              End Date:
              <DatePicker
                name="endDate"
                format="yyyy-MM-dd"
                value={values.endDate}
                onChange={(date) => setFieldValue('endDate', date)}
              />
              <ErrorMessage name="endDate" component="div" />
            </label>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TravelPlans;
