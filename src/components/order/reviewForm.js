import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';

import { FormButton } from '../formFields';
import ReviewProducts from './reviewProducts';

class ReviewForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit} className= {`${className} review-form`}>
                <ReviewProducts className='review-form__products'/>
                <div className='review-form__line'></div>
                <Field className='review-form__proceed'
                onClick={() => history.push('/signin')}
                type='submit'
                title='Proceed to Checkout'
                name='proceed'
                component={FormButton} />
                <Field className='review-form__back'
                onClick={() => history.push('/shop')}
                type='button'
                title='Back'
                name='back'
                short={true}
                component={FormButton} />
            </form>
        )
    }
}

ReviewForm = reduxForm ({
    form: 'ReviewForm'
}) (ReviewForm)

export default ReviewForm;