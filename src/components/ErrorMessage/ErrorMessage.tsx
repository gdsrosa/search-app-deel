import './ErrorMessage.css';

type ErrorMessageProps = {
  message: string;
};

function ErrorMessage({ message }: ErrorMessageProps) {
  return <span className="error">{message}</span>;
}

export default ErrorMessage;
