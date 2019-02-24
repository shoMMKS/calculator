import React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core'

const styles = () => ({
  container: {
    maxWidth: 1160,
    margin: '0px auto'
  },
  resultText: {
    
  }
})

const Calculator = props => {
  const { classes, shift } = props
  console.log(shift)
  return (
    <div className={classes.container}>
      <Typography className={classes.resultText}>
        {shift.name}
      </Typography>
    </div>
  )
}

const mapStateToProps = state => ({
  shift: state.reducers.worker
})

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Calculator))
