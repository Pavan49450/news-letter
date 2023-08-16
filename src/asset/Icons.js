import "./Icons.css";

const Icons = (props) => {
  return (
    <a href={props.path} className={props.socialMedia} title={props.title}>
      {props.children}
    </a>
  );
};

export default Icons;
