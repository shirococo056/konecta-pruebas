import { useContext } from 'react';
import LoggedInUserContext from '../../context/logged-in-user';

export default function Sidebar() {
  const { user: { docId = '', userId, following, username, fullName } = {} } =
    useContext(LoggedInUserContext);
}
