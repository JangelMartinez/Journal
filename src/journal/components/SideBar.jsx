import { TurnedInNot } from '@mui/icons-material'
import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const SideBar = ({drawerWidth = 240}) => {
  return (
	<Box
		component='nav'
		sx={{
			width: { sm: drawerWidth}, 
			flexShrink: {sm:0}
		}}
	>
		<Drawer
			variant='permanent'
			open
			sx={{
				display: {xs: 'block'},
				'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
			}}
		>
			<Toolbar>
				<Typography 
					variant='h6'
					noWrap
					component='div'
				>
					José Ángel Martínez
				</Typography>
			</Toolbar>
			<Divider />
			<List>
				{
					['Enero','Febrero', 'Marzo', 'Abril'].map (text => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<TurnedInNot />
								</ListItemIcon>
								<Grid container>
									<ListItemText primary={text} />
									<ListItemText secondary={'Velit excepteur fugiat enim eu aliquip nulla incididunt quis mollit irure eu.'}/>
								</Grid>
							</ListItemButton>
						</ListItem>
					))
				}
			</List>

		</Drawer>
	</Box>
  )
}
