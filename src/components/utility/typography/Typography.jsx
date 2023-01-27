import React from 'react'
import { Typography } from '@mui/material'

export default function CustomTypography(text) {
  return (
    <>
      <Typography
      variant='h2'
      sx={{
        // textAlign: viewPort < 800 ? 'center' : null,
        position: 'relative',
        // left: viewPort < 800 ? 0 : 50,
        // top: viewPort < 800 ? 100 : 120,
        // fontSize: viewPort < 800 ? '20vw' : '8vw',
        fontWeight: 'bold',
        color: 'rgb(0,255,255,0%)',
        WebkitTextStroke: '0.5px aqua',
        backgroundImage: `url('https://media1.giphy.com/media/5k00E7cigvvqnBYDdP/giphy.gif?cid=ecf05e47cde9hqvaqke38lehjfkc1r8hjs44rqvfdl6z49kb&rid=giphy.gif&ct=g')`,
        // backgroundImage: `url('https://media0.giphy.com/media/l0HlBaC5Kp9cXZDTa/giphy.gif?cid=ecf05e47molls6ezt99bi47b15q5zfefhusyqrjuz7mhl1ic&rid=giphy.gif&ct=g')`,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        transition: 'color 0.50s, left 0.50s, -webkit-text-stroke 0.50s',
        '&: hover': {
          color: 'rgb(0,255,255,50%)',
          // left: viewPort < 800 ? 'none' : 70,
          WebkitTextStroke: '0.5px aqua',
          cursor: 'arrow',
          userSelect: 'none'
        }
      }}
    >
      {text}
    </Typography>
  </>
  )
}
