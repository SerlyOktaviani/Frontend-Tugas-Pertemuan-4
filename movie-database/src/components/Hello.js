/**
 * Membuat component Hello.
 * Component Hello menerima inputan: props.
 *
 */
const Hello = (props) => {

  // Melakukan destructing props (object)

  return (
    <div className="hello">
      <h2>Hello React</h2>
      <p> Serly {props.name} - Frontend Engineer</p>
    </div>
  );
}

export default Hello;
