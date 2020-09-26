import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const SurveyForm = (props) => {
  const [formState, setFormState] = useState({
    title: '',
    subject: '',
    body: '',
    recipient: [],
  });
  const handleFormState = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <>
      <header id='main-header' className='py-2 bg-primary text-white expand-sm'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h4 className='mt-2'>
                {' '}
                <i className='fas fa-pen'></i>
              </h4>
            </div>
          </div>
        </div>
      </header>
      <div className='container'>
        <h4>Create Your Survey</h4>
        <form>
          <div className='form-group'></div>
          <input
            type='text'
            placeholder='Title'
            name='title'
            className='form-control-lg form-control'
            onChange={handleFormState}
          />
          <small className='form-text  mb-2'>The Title of Your Survey</small>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Subject'
              name='subject'
              className='form-control form-control-lg'
              onChange={handleFormState}
            />
            <small className='form-text mb-2'>The Subject of your Survey</small>
          </div>
          <textarea
            className='form-control'
            name='body'
            id=''
            cols='30'
            rows='10'
            onChange={handleFormState}></textarea>
          <small className='form-text mb-2'>The Body of Your Survey</small>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Recipients'
              name='recepients'
              className='form-control form-control-lg'
              onChange={handleFormState}
            />
            <small className='form-text mb-2'>
              Please Seperate Each Recipient With a Comma
            </small>
          </div>
          <div className='d-flex'>
            <input type='submit' className='btn btn-primary mr-4' />
            <Link to='/dashboard' className='btn btn-secondary'>
              Go back
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

SurveyForm.propTypes = {};

export default SurveyForm;
