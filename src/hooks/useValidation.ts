import { useState, useEffect } from 'react';
import { ErrorType } from '../types';

const validations = {
  minLength: {
    message: 'Minimum 2 characters required',
  },
  maxLength: {
    message: 'Maximum of 20 characters exceeded',
  },
};

export function useValidation(query: string) {
  const [error, setError] = useState<ErrorType>({ message: '' });
  const [classname, setClassname] = useState<string>('');

  useEffect(() => {
    const classNameError: string = 'error__input';
    const maxLength: number = 20;
    const minLength: number = 2;
    const isQueryEmpty: boolean = query.length === 0;

    function updateValidationState(message: string, className: string) {
      setError({ message });
      setClassname(className);
    }

    if (query.length < minLength && !isQueryEmpty) {
      updateValidationState(validations.minLength.message, classNameError);
    } else if (query.length > maxLength && !isQueryEmpty) {
      updateValidationState(validations.maxLength.message, classNameError);
    } else {
      updateValidationState('', '');
    }
  }, [query]);

  return { error, classname };
}
