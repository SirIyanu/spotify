export const HeaderNavigation = (props) => {
  return (
    <ul className={props.className}>
      <li>
        <a href="#/Premium">Premium</a>
      </li>
      <li>
        <a href="#/Support">Support</a>
      </li>
      <li>
        <a href="#/Download">Download</a>
      </li>
      <li className="hidden-mobile">|</li>
      <li className="active">
        <a href="#/Sign Up">Sign Up</a>
      </li>
      <li className="active">
        <a href="#/Log in">Log in</a>
      </li>
    </ul>
  );
};
