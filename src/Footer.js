import React from 'react'
import './Footer.css'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutline'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import RepeatIcon from '@mui/icons-material/Repeat'
import { Grid, Slider } from '@mui/material/'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'

function Footer() {
  return (
      <div className='footer'>

        <div className='footer__left'>
            <img className='footer__albumLogo' src='' alt=''/>
            <div className='footer_songInfo'>
                <h4>Yeah!</h4>
                <p>Usher</p>
            </div>
        </div>

        <div className='footer__center'>
            <ShuffleIcon className='footer__green' />
            <SkipPreviousIcon className='footer__icon'/>
            <PlayCircleOutlinedIcon fontSize='large' className='footer__icon'/>
            <SkipNextIcon className='footer__icon'/>
            <RepeatIcon className='footer__green'/>
        </div>

        <div className='footer__right'>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>

                <Grid item>
                    <VolumeDownIcon />
                </Grid>

                <Grid item xs>
                    <Slider />
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Footer