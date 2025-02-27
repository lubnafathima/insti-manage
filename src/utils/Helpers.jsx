import { FaHome, FaUniversity, FaChalkboardTeacher } from "react-icons/fa";
import { MdSettings, MdAnalytics, MdHelp, MdPayments, MdSubscriptions } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { PiStudentFill } from "react-icons/pi";
import { TbGraphFilled } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import { RiParentFill } from "react-icons/ri";
import { IoTicket } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";

export const MENU_LIST = {
  admin: [
    {
      name: "Home",
      icon: <FaHome className="w-6 h-6" />,
      path: "/admin/home",
    },
    {
      name: "Institutes",
      icon: <FaUniversity className="w-6 h-6" />,
      path: "/admin/institutes",
    },
    {
      name: "Analytics",
      icon: <MdAnalytics className="w-6 h-6" />,
      submenu: [
        {
          name: "Reports",
          path: "/admin/reports",
          icon: <BiSolidReport className="w-6 h-6 ml-8" />,
        },
        {
          name: "Activities",
          path: "/admin/activities",
          icon: <TbGraphFilled className="w-6 h-6 ml-8" />,
        },
      ],
    },
    {
      name: "Payments",
      path: "/admin/payments",
      icon: <MdPayments className="w-6 h-6" />,
    },
    {
      name: "Settings",
      icon: <MdSettings className="w-6 h-6" />,
      path: "/admin/settings",
    },
    {
      name: "Help",
      icon: <MdHelp className="w-6 h-6" />,
      path: "/admin/help",
    },
  ],

  institutes: [
    {
      name: "Home",
      icon: <FaHome className="w-6 h-6" />,
      path: "/institutes/home",
    },
    {
      name: "Manage Teacher",
      icon: <FaChalkboardTeacher className="w-6 h-6" />,
      path: "/institutes/teacher",
    },
    {
      name: "Manage Student",
      icon: <PiStudentFill className="w-6 h-6" />,
      path: "/institutes/student",
    },
    {
      name: "Manage Class",
      icon: <SiGoogleclassroom className="w-6 h-6" />,
      path: "/institutes/class",
    },
    {
      name: "Manage Parent",
      icon: <RiParentFill className="w-6 h-6" />,
      path: "/institutes/parent",
    },
    {
      name: "Support Ticket",
      icon: <IoTicket className="w-6 h-6" />,
      path: "/institutes/support",
    },
    {
      name: "Subscription & Payments",
      icon: <MdSubscriptions className="w-6 h-6" />,
      path: "/institutes/subscription",
    },
    {
      name: "Analytics & Reports",
      icon: <MdAnalytics className="w-6 h-6" />,
      path: "/institutes/reports",
    },
    {
      name: "Notification",
      icon: <IoMdNotifications className="w-6 h-6" />,
      path: "/institutes/notification",
    },
    {
      name: "Settings",
      icon: <MdSettings className="w-6 h-6" />,
      path: "/institutes/settings",
    },
    {
      name: "Help & Support",
      icon: <MdHelp className="w-6 h-6" />,
      path: "/institutes/help",
    },
  ],

  teachers: [
    {
      name: "Home",
      icon: <FaHome className="w-6 h-6" />,
      path: "/teachers/home",
    },
    {
      name: "Class Management",
      icon: <FaUniversity className="w-6 h-6" />,
      path: "/teachers/class",
    },
    {
      name: "Class Schedule",
      icon: <BiSolidReport className="w-6 h-6" />,
      path: "/teachers/schedule",
    },
    {
      name: "Subject Management",
      icon: <MdPayments className="w-6 h-6" />,
      path: "/teachers/subject",
    },
    {
      name: "Student Reports",
      icon: <MdSettings className="w-6 h-6" />,
      path: "/teachers/reports",
    },
    {
      name: "Parent Communication",
      icon: <MdSettings className="w-6 h-6" />,
      path: "/teachers/communication",
    },
    {
      name: "Assignments & Exams",
      icon: <MdSettings className="w-6 h-6" />,
      path: "/teachers/assignments",
    },
    {
      name: "Settings",
      icon: <MdSettings className="w-6 h-6" />,
      path: "/teachers/settings",
    },
  ],

  students: [
    {
      name: "Home",
      icon: <FaHome className="w-6 h-6" />,
      path: "/students/home",
    },
    {
      name: "Classes",
      icon: <FaUniversity className="w-6 h-6" />,
      path: "/students/classes",
    },
    {
      name: "Assignments",
      icon: <BiSolidReport className="w-6 h-6" />,
      path: "/students/assignments",
    },
    {
      name: "grades",
      icon: <MdPayments className="w-6 h-6" />,
      path: "/students/grades",
    },
    {
      name: "Attendance",
      icon: <MdSettings className="w-6 h-6" />,
      path: "/students/attendance",
    },
    {
      name: "Reports",
      icon: <MdSettings className="w-6 h-6" />,
      path: "/students/reports",
    },
    {
      name: "Communication",
      icon: <MdSettings className="w-6 h-6" />,
      path: "/students/communication",
    },
    {
      name: "Notifications",
      icon: <MdSettings className="w-6 h-6" />,
      path: "/students/notifications",
    },
    {
      name: "Parent Portal",
      icon: <MdSettings className="w-6 h-6" />,
      path: "/students/parent-portal",
    },
    {
      name: "Settings",
      icon: <MdSettings className="w-6 h-6" />,
      path: "/students/settings",
    },
  ],

  parents: [
    {
      name: "Home",
      icon: <FaHome className="w-6 h-6" />,
      path: "/parents/home",
    },
    {
      name: "Student Performance",
      icon: <FaUniversity className="w-6 h-6" />,
      path: "/parents/student-performance",
    },
    {
      name: "Attendance",
      icon: <BiSolidReport className="w-6 h-6" />,
      path: "/parents/attendance",
    },
    {
      name: "Assignments",
      icon: <MdPayments className="w-6 h-6" />,
      path: "/parents/assignments",
    },
    {
      name: "Exams",
      icon: <MdPayments className="w-6 h-6" />,
      path: "/parents/exams",
    },
    {
      name: "Communication",
      icon: <MdSettings className="w-6 h-6" />,
      path: "/parents/communication",
    },
  ],
};

export const INSTI_LIST = [
  {
    id: 1,
    name: "Springfield Institute of Technology",
    type: "University",
    status: "Active",
    contact: "+1-217-555-1234, contact@springfieldtech.edu",
  },
  {
    id: 2,
    name: "Green Valley High School",
    type: "School",
    status: "Inactive",
    contact: "+1-312-555-5678, info@greenvalleyhs.edu",
  },
  {
    id: 3,
    name: "Riverside Community College",
    type: "College",
    status: "Active",
    contact: "+1-213-555-9876, admissions@riversidecc.edu",
  },
  {
    id: 4,
    name: "Horizon University",
    type: "University",
    status: "Inactive",
    contact: "+1-415-555-1234, info@horizonuniv.edu",
  },
  {
    id: 5,
    name: "Westside Academy",
    type: "School",
    status: "Active",
    contact: "+1-718-555-8765, admin@westsideacademy.edu",
  },
  {
    id: 6,
    name: "Lakeshore College",
    type: "College",
    status: "Active",
    contact: "+1-510-555-6543, contact@lakeshore.edu",
  },
  {
    id: 7,
    name: "Silver Oak International School",
    type: "School",
    status: "Inactive",
    contact: "+1-619-555-4321, info@silveroak.edu",
  },
  {
    id: 8,
    name: "Blue Ridge University",
    type: "University",
    status: "Active",
    contact: "+1-858-555-5678, admissions@blueridgeuniv.edu",
  },
  {
    id: 9,
    name: "Maplewood Academy",
    type: "School",
    status: "Inactive",
    contact: "+1-702-555-8765, contact@maplewoodacademy.edu",
  },
  {
    id: 10,
    name: "Sunnydale College",
    type: "College",
    status: "Active",
    contact: "+1-212-555-6543, info@sunnydalecollege.edu",
  },
  {
    id: 11,
    name: "Oakridge International School",
    type: "School",
    status: "Active",
    contact: "+1-323-555-4321, admin@oakridge.edu",
  },
  {
    id: 12,
    name: "Hillcrest University",
    type: "University",
    status: "Inactive",
    contact: "+1-714-555-5678, contact@hillcrestuniv.edu",
  },
  {
    id: 13,
    name: "Greenwood High",
    type: "School",
    status: "Active",
    contact: "+1-415-555-8765, info@greenwoodhigh.edu",
  },
  {
    id: 14,
    name: "Redwood College",
    type: "College",
    status: "Inactive",
    contact: "+1-925-555-6543, admissions@redwood.edu",
  },
  {
    id: 15,
    name: "Golden Valley School",
    type: "School",
    status: "Active",
    contact: "+1-510-555-4321, contact@goldenvalley.edu",
  },
  {
    id: 16,
    name: "Evergreen University",
    type: "University",
    status: "Active",
    contact: "+1-619-555-5678, admin@evergreen.edu",
  },
  {
    id: 17,
    name: "Elmwood Academy",
    type: "School",
    status: "Inactive",
    contact: "+1-702-555-8765, info@elmwoodacademy.edu",
  },
  {
    id: 18,
    name: "Seaside College",
    type: "College",
    status: "Active",
    contact: "+1-213-555-6543, contact@seaside.edu",
  },
  {
    id: 19,
    name: "Pinecrest University",
    type: "University",
    status: "Inactive",
    contact: "+1-212-555-4321, admissions@pinecrestuniv.edu",
  },
  {
    id: 20,
    name: "Lakewood High School",
    type: "School",
    status: "Active",
    contact: "+1-312-555-5678, info@lakewoodhigh.edu",
  },
  {
    id: 21,
    name: "Brookfield College",
    type: "College",
    status: "Active",
    contact: "+1-415-555-8765, admin@brookfield.edu",
  },
  {
    id: 22,
    name: "Valley Forge University",
    type: "University",
    status: "Inactive",
    contact: "+1-718-555-6543, contact@valleyforge.edu",
  },
  {
    id: 23,
    name: "Mountainview Academy",
    type: "School",
    status: "Active",
    contact: "+1-510-555-4321, info@mountainviewacademy.edu",
  },
  {
    id: 24,
    name: "Ridgefield College",
    type: "College",
    status: "Inactive",
    contact: "+1-213-555-5678, contact@ridgefield.edu",
  },
  {
    id: 25,
    name: "Silver Valley University",
    type: "University",
    status: "Active",
    contact: "+1-858-555-8765, admissions@silvervalley.edu",
  },
  {
    id: 26,
    name: "Northwood Academy",
    type: "School",
    status: "Inactive",
    contact: "+1-323-555-6543, info@northwoodacademy.edu",
  },
  {
    id: 27,
    name: "Clearwater College",
    type: "College",
    status: "Active",
    contact: "+1-714-555-4321, contact@clearwater.edu",
  },
  {
    id: 28,
    name: "Maple Grove University",
    type: "University",
    status: "Inactive",
    contact: "+1-925-555-5678, info@maplegrove.edu",
  },
  {
    id: 29,
    name: "Riverview School",
    type: "School",
    status: "Active",
    contact: "+1-510-555-8765, admin@riverview.edu",
  },
  {
    id: 30,
    name: "Southridge College",
    type: "College",
    status: "Active",
    contact: "+1-619-555-6543, contact@southridge.edu",
  },
];
