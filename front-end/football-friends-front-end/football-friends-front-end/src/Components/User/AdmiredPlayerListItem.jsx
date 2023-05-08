/**
 * This component will NOT be a page in our webapp. It will be rendered by either
 * the 'ViewUser' component or the 'Profile' component.
 *
 * It will take the 'Admired Player' in question as props and render a box with all the
 * info about that admired player (e.g. name, age, reason admired etc.)
 *
 * If this component is being rendered by the 'Profile' component, then it should
 * be 'clickable' by the user. It is by clicking on the admired player that a user will
 * be able to edit a player they admire. (This will navigate them to the
 * 'ViewAdmiredPlayer' component)
 */

export default function AdmiredPlayerListItem() {
  return (
    <>
      <h3>This is an admired Player List Item</h3>
    </>
  );
}
