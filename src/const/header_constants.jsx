import { ReactComponent as Planning } from '../assets/images/icon-planning.svg';
import { ReactComponent as Calendar } from '../assets/images/icon-calendar.svg';
import { ReactComponent as Todo } from '../assets/images/icon-todo.svg';
import { ReactComponent as Reminders } from '../assets/images/icon-reminders.svg';
import { ReactComponent as History } from '../assets/images/history-menu.svg';
import { ReactComponent as OurTeam } from '../assets/images/icon-team.svg';
import { ReactComponent as Blog } from '../assets/images/icon-blog.svg';

// eslint-disable-next-line react-refresh/only-export-components
export const FEATURES = [
  { text: 'Todo List', icon: <Todo/> },
  { text: 'Calendar', icon: <Calendar/> },
  { text: 'Reminders', icon: <Reminders/> },
  { text: 'Planning', icon: <Planning/> },
];
// eslint-disable-next-line react-refresh/only-export-components
export const COMPANY = [
  { text: 'History',icon:<History/> },
  { text: 'Our team', icon:<OurTeam/>},
  { text: 'Blog' ,icon:<Blog/>},
]
// eslint-disable-next-line react-refresh/only-export-components
export const NAV_ITEM={
  Feature:'Feature',
  Company:'Company',
  Careers:'Careers',
  About:'About'
}