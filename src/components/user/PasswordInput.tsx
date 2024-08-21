import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

const CustomInput: React.FC<{ field: any, form: any, [x: string]: any }> = ({
  field,
  form,
  ...props
}) => {
  const error = form.touched[field.name] && form.errors[field.name];
  
  return (
    <div className="w-full">
      <input
        {...field}
        {...props}
        className={`border rounded-full w-full h-12 text-center shadow-sm focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
        }`}
      />
      {error && <div className="text-red-500 text-sm text-center mt-2">{form.errors[field.name]}</div>}
    </div>
  );
};

const PasswordInput: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  // Form validation schema with Yup
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Şifrə tələb olunur')
      .min(4, 'Şifrə ən az 4 simvoldan ibarət olmalıdır'),
  });

  // Handle form submission
  const handleSubmit = (values: { password: string }) => {
    console.log('Şifrə:', values.password);
    navigate('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <button 
        title='go-back'
        type='button'
        onClick={handleGoBack} 
        className="absolute top-6 left-6 focus:outline-none"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-black text-2xl" />
      </button>
      
      <p className="text-center text-lg font-medium text-gray-700 mb-6">
        Zəhmət olmasa sizin üçün nəzərdə tutulmuş şifrəni daxil edin
      </p>
      
      <Formik
        initialValues={{ password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col items-center w-full max-w-sm">
            <div className="w-full mb-6">
              <Field
                name="password"
                type="password"
                placeholder="XXXX"
                component={CustomInput}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-8 py-3 rounded-full focus:outline-none hover:bg-blue-700"
            >
              {isSubmitting ? 'Gözləyin...' : 'Daxil ol'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PasswordInput;
