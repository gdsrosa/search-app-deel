import './ItemsWrapper.css';

type ItemsWrapperProps = {
  children: React.ReactElement | React.ReactElement[];
};

function ItemsWrapper({ children }: ItemsWrapperProps) {
  return (
    <div className="container">
      <div className="container__items">{children}</div>
    </div>
  );
}

export default ItemsWrapper;
