import './index.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bodymovin from 'bodymovin'
import classNames from 'classnames'

class Bodymovin extends Component {
  constructor(props) {
    super(props)
    this._played = props.played
    this._speed = props.speed
    this._dom = null
    this._anim = null
  }

  componentDidMount() {
    this._anim = bodymovin.loadAnimation({
      container: this._dom,
      renderer: 'svg',
      loop: this.props.loop,
      autoplay: this.props.autoplay,
      animationData: this.props.src,
    })

    if (this._played) {
      this._anim.goToAndStop(0xffffff, true)
    }

    this._anim.setSpeed(this.props.speed)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.speed !== this._speed) {
      this._anim.setSpeed(nextProps.speed)
      this._speed = nextProps.speed
    }

    if (this._played !== nextProps.played) {
      if (!this._played) {
        this._anim.setDirection(1)
        this._anim.goToAndPlay(1, true)
      } else {
        this._anim.setDirection(-1)
        this._anim.goToAndPlay(0xffffff, true)
      }
      this._played = nextProps.played
    }

  }

  componentWillUnmount() {
    bodymovin.destroy()
    this._anim.destroy()
    this._anim = null
    this._dom = null
    this._speed = null
  }

  render() {
    const { className } = this.props
    return (
      <div
        className={classNames('Bodymovin', className)}
        ref={dom => this._dom = dom}
      />
    )
  }
}

Bodymovin.propTypes = {
  src: PropTypes.object.isRequired,
  speed: PropTypes.number,
  played: PropTypes.bool,
  loop: PropTypes.bool,
  autoplay: PropTypes.bool,
  className: PropTypes.string,
}

Bodymovin.defaultProps = {
  speed: 1,
  played: false,
  loop: false,
  autoplay: false,
  className: null,
}

export default Bodymovin
