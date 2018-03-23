import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Helmet } from "react-helmet"

import Header from "../../components/Header";
import { WhiteRoundedButton } from "../../components/Button"
import { TurquoiseRoundedButtonStyled } from "../../components/styles/button"
import "./waitlist.css"

const STATUSES = {
  IN_QUEUE: "WAITLIST",
  GRANTED_ACCESS: "ACCESS",
  UNKNOWN: "NOT_FOUND",
  LOADING: "LOADING"
}

const WaitListError = () => (
  <div>
    <h1 className="WaitList__status-header">Hittade inte din plats...</h1>

    <a href="https://hedvig.app.link">
      <TurquoiseRoundedButtonStyled>Ladda ner appen</TurquoiseRoundedButtonStyled>
    </a>
  </div>
)

class WaitList extends React.Component {
  static defaultProps = {
    status: STATUSES.LOADING,
    position: undefined,
    code: undefined,
    copyClicked: false
  }
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      })
    }).isRequired,
    status: PropTypes.oneOf(Object.values(STATUSES)),
    position: PropTypes.number,
    code: PropTypes.string,
    fetchWaitlistPosition: PropTypes.func.isRequired,
    copyClicked: PropTypes.bool,
    toggleCopyStatus: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchWaitlistPosition(this.props.match.params.id)
  }

  render() {
    let content
    switch (this.props.status) {
      case STATUSES.IN_QUEUE:
        content = (
          <div>
            <h1 className="WaitList__header">Snart är det&nbsp;dags!</h1>
            <div className="pure-g pure-centered">
              <div className="pure-u-1-1 pure-u-md-3-5 pure-u-lg-5-8 pure-u-xl-1-2">
                <div className="WaitList__position-box">
                  <p className="WaitList__paragraph WaitList__paragraph--marginless">Före dig på väntelistan står</p>
                  <h3 className="WaitList__header WaitList__heading--position">{ this.props.position } <span className="WaitList__person-label">personer</span></h3>
                </div>
              </div>
            </div>
            <p className="WaitList__paragraph">Du får en aktiveringskod på mailen så fort det är din tur!</p>
            <p className="WaitList__paragraph">Vi ses snart!</p>
          </div>
        )
        break
      case STATUSES.GRANTED_ACCESS:
        content = (
          <div>
            <h1 className="WaitList__header">Välkommen till&nbsp;Hedvig</h1>
            <p className="WaitList__paragraph">Din aktiveringskod är</p>
            <p className="WaitList__code">{this.props.code}</p>
            <CopyToClipboard text={this.props.code}>
              <WhiteRoundedButton
                onClick={this.props.toggleCopyStatus}
                style={{
                  width: "200px",
                  backgroundColor: this.props.copyClicked ? "#651EFF" : "white",
                  color: this.props.copyClicked ? "white" : "#651EFF",
                }}
              >
                {this.props.copyClicked ? 'Kopierad' : 'Kopiera koden'}
              </WhiteRoundedButton>
            </CopyToClipboard>
            <p className="WaitList__paragraph">och installera sedan appen</p>
            <div>
              <a href="https://itunes.apple.com/se/app/hedvig/id1303668531?mt=8" target="_blank" rel="noopener noreferrer">
                <img
                  src="/assets/web/appstores/app-store-badge@2x.png"
                  alt="Ladda ner på App Store"
                  height={54}
                />
              </a>
            </div>
            <div>
              <a href="https://play.google.com/store/apps/details?id=com.hedvig.app" target="_blank" rel="noopener noreferrer">
                <img
                  src="/assets/web/appstores/google-play-badge@2x.png"
                  alt="Ladda ner på Google Play"
                  height={54}
                />
              </a>
            </div>
          </div>
        )
        break
      case STATUSES.UNKNOWN:
        content = <WaitListError/>
        break
      case STATUSES.LOADING:
        content = (
          <div>
            <p className="WaitList__paragraph">Laddar...</p>
          </div>
        )
        break
      default:
        content = <WaitListError/>
        break
    }
    return (
      <main className="WaitList">
        <Helmet>
          <title>Hedvig</title>
        </Helmet>
        <Header static headerRight={<React.Fragment></React.Fragment>} />
        <article className="pure-g pure-centered">
          <div className="pure-u-1-1 pure-u-lg-4-5 WaitList__content">
            {content}
          </div>
        </article>
      </main>
    )
  }
}

export { WaitList as WaitListComponent }

export default connect(
  state => ({
    position: state.waitlist.position,
    status: state.waitlist.status,
    code: state.waitlist.code,
    copyClicked: state.waitlist.copyClicked
  }),
  dispatch => ({
    fetchWaitlistPosition: token => dispatch({
      type: "API",
      payload: {
        url: "/hedvig/waitlist",
        method: "POST",
        body: token,
        SUCCESS: "WAITLIST/RETRIEVED_WAITLIST_STATUS",
      }
    }),
    toggleCopyStatus: () => dispatch({type: "WAITLIST/TOGGLE_COPY_STATUS"})
  })
)(WaitList)
