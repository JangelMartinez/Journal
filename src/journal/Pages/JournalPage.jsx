import { AddOutlined, MailOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"


const JournalPage = () => {
	return (
		<JournalLayout>
			{/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus dolorem recusandae repudiandae sapiente quae provident et repellat laudantium? Facere quibusdam minima nostrum incidunt voluptates odio nihil accusantium excepturi facilis.</Typography> */}

			<NothingSelectedView />
			{/* <NoteView /> */}
			<IconButton
				size='large'
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': { backgroundColor: 'error.main', opacity: 0.9},
					position: 'fixed',
					right: 50,
					bottom: 50
				}}
			>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayout>

	)
}

export default JournalPage