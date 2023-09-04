import { useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getUserByName } from '../services/studentService';


export default function StudentCard(props:any) {
  const {student} = props;
  const [setUser] = useState<any>(null);
  console.log("🚀 ~ file: StudentCard.tsx:13 ~ StudentCard ~ student:", student)

  useEffect(() => {
    const getUser = async () => {
        const data  = await getUserByName();
        console.log("🚀 ~ file: StudentCard.tsx:18 ~ getUser ~ data:", data)
        setUser(data);
    }
    getUser();
  }, []);

  return (
    <Card sx={{ Semestre: 3}}>
      {student && <CardHeader
        avatar={
          (student) && <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {student.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={student.name}
        subheader={`semestre: ${student.semestre}`}
      />}
    </Card>
  );
}