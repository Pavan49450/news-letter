import "./Icons.css";

const Icons = (props) => {
  return (
    <a href={props.path} className={props.socialMedia}>
      {props.children}
    </a>
  );
};

export default Icons;
