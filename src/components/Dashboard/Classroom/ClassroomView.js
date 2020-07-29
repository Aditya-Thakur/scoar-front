import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Avatar, Card, Button, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SubjectIcon from "@material-ui/icons/Subject";
import ScheduleIcon from "@material-ui/icons/Schedule";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";

export default function ClassroomView(props) {
	const history = useHistory();
	useEffect(() => {
		console.log("class view props", props);
	}, []);

	return (
		<div className="classroomView">
			<Avatar
				className={"classroomView__backBtn"}
				onClick={(e) => history.push("/dashboard/classroom")}
			>
				<ArrowBackIcon />
			</Avatar>
			<div className="classroomView__body row">
				<div className="col col-5 col-sm-5 col-md-5 col-lg-5">
					<div className="contentContainer">
						{[1, 2, 3, 4, 5].map((i) => (
							<ClassCard {...props} classId={i} />
						))}
					</div>
				</div>
				<div className="col col-7 col-sm-7 col-md-7 col-lg-7">
					<Card className="contentContainer rightCard">
						<ClassDetailCard {...props} />
					</Card>
				</div>
			</div>
		</div>
	);
}

const ClassCard = (props) => {
	const history = useHistory();
	const classId = props.match.params.id;

	console.log("clicked", props.classId, classId);
	return (
		<Card
			className="classCard"
			id={props.classId == classId ? "activeCard" : null}
			onClick={(e) => history.push(`/dashboard/classroom/${props.classId}`)}
		>
			<div className="classData__dataContainer">
				<div className="icon">
					<span>
						<SubjectIcon />
					</span>
				</div>
				<div className="studentDetails">
					<h4>
						{"Science"} for class {"6th"}
					</h4>
					<p>Total students: {"40"}</p>
					{/* <p>Mode of instruction: {"English"}</p> */}
					<p>
						<ScheduleIcon /> {"1 hour"}
					</p>
				</div>
			</div>
		</Card>
	);
};

const ClassDetailCard = (props) => {
	return (
		<div className="classDetailCard">
			<div className="top">
				<ClassData {...props} />
			</div>
			<div className="bottom">
				<StudentList {...props} />
			</div>
		</div>
	);
};

const ClassData = (props) => {
	const history = useHistory();
	return (
		<div className="classData">
			<div className="classData__id">
				<p>Classroom ID: {props.match.params.id}</p>
				<div className="flex-grow-1" />
				<Button
					size="small"
					variant="contained"
					onClick={(e) => ""}
					className="topBtn joinBtn"
				>
					Join Now
				</Button>
				&nbsp; &nbsp;
				<Button
					size="small"
					variant="contained"
					onClick={(e) => ""}
					className="topBtn"
				>
					Change Schedule
				</Button>
				&nbsp; &nbsp;
				<Button
					size="small"
					variant="contained"
					onClick={(e) => ""}
					className="topBtn"
				>
					Cancel
				</Button>
				&nbsp; &nbsp;
				<Button
					size="small"
					variant="contained"
					onClick={(e) => ""}
					className="topBtn"
					startIcon={<EditIcon />}
				>
					Edit
				</Button>
			</div>

			<div className="classData__dataContainer">
				<div className="icon">
					<span>
						<SubjectIcon />
					</span>
				</div>
				<div className="studentDetails">
					<h4>
						{"Science"} for class {"6th"}
					</h4>
					<p>Total students: {"40"}</p>
					<p>Mode of instruction: {"English"}</p>
					<p>
						<ScheduleIcon /> {"1 hour"}
					</p>
				</div>
			</div>

			<div className="classData__calendar">
				<h5 className="text-left">Classes on</h5>
				<div className="week">
					<div className="day">
						<Avatar className="active">S</Avatar>
					</div>
					<div className="day">
						<Avatar className="">M</Avatar>
					</div>
					<div className="day">
						<Avatar className="active">T</Avatar>
					</div>
					<div className="day">
						<Avatar className="active">W</Avatar>
					</div>
					<div className="day">
						<Avatar className="">T</Avatar>
					</div>
					<div className="day">
						<Avatar className="active">F</Avatar>
					</div>
					<div className="day">
						<Avatar className="active">S</Avatar>
					</div>
				</div>
			</div>
			<h5>Description</h5>
			<div className="description">
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
					nobis natus debitis hic asperiores minima! Lorem ipsum, dolor sit amet
					consectetur adipisicing elit. Excepturi, nobis natus debitis hic
					asperiores minima!
				</p>
			</div>
		</div>
	);
};

const StudentList = (props) => {
	const history = useHistory();
	return (
		<div className="studentList">
			<div className="table container-flex">
				<div className="header row">
					<div className="col col-1 col-sm-1 col-md-1 col-lg-1">
						<Checkbox
							color="primary"
							inputProps={{ "aria-label": "secondary checkbox" }}
							size="small"
							className="totalCheck"
						/>
					</div>
					<div className="col col-3 col-sm-3 col-md-3 col-lg-3">
						<p>Name</p>
					</div>
					<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
						<p>Join Date</p>
					</div>
					<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
						<p>Assignment</p>
					</div>
					<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
						<p>Fee</p>
					</div>

					<div className="col col-1 col-sm-1 col-md-1 col-lg-1">
						<p>Details</p>
					</div>
				</div>
				<div className="body">
					<TableRow
						name="Shubham"
						avatar="/shubham.png"
						assignment="Issued"
						fee="Paid"
						date="23 Aug, 2020"
						handleView={(e) => alert("View open")}
					/>
					<TableRow
						name="Shubham"
						avatar="/shubham.png"
						assignment="Issued"
						fee="Paid"
						date="23 Aug, 2020"
						handleView={(e) => alert("View open")}
					/>
					<TableRow
						name="Shubham"
						avatar="/shubham.png"
						assignment="Issued"
						fee="Paid"
						date="23 Aug, 2020"
						handleView={(e) => alert("View open")}
					/>
					<TableRow
						name="Shubham"
						avatar="/shubham.png"
						assignment="Issued"
						fee="Paid"
						date="23 Aug, 2020"
						handleView={(e) => alert("View open")}
					/>
					<TableRow
						name="Shubham"
						avatar="/shubham.png"
						assignment="Issued"
						fee="Paid"
						date="23 Aug, 2020"
						handleView={(e) => alert("View open")}
					/>
				</div>
			</div>
		</div>
	);
};

const TableRow = (props) => {
	const { name, avatar, assignment, fee, date, handleView } = props;
	return (
		<div className="row">
			<div className="col col-1 col-sm-1 col-md-1 col-lg-1">
				<Checkbox
					color="primary"
					inputProps={{ "aria-label": "secondary checkbox" }}
					size="small"
				/>
			</div>

			<div className="col col-3 col-sm-3 col-md-3 col-lg-3">
				<Avatar src={avatar} />
				<Typography
					gutterBottom
					variant="subtitle2"
					component="p"
					color="textSecondary"
					className="name"
				>
					{name}
				</Typography>
			</div>

			<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
				<Typography gutterBottom variant="subtitle2" component="p">
					{date}
				</Typography>
			</div>

			<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
				<Typography gutterBottom variant="subtitle2" component="p">
					{assignment}
				</Typography>
			</div>

			<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
				<Typography
					gutterBottom
					variant="subtitle2"
					component="p"
					color="textSecondary"
				>
					{fee}
				</Typography>
			</div>

			<div className="col col-1 col-sm-1 col-md-1 col-lg-1">
				<Button size="small" onClick={(e) => handleView(e)}>
					View
				</Button>
			</div>
		</div>
	);
};
