import PropTypes from 'prop-types'
import React from 'react'
import pig from '../assets/images/pig.jpg'
import sea2 from '../assets/images/sea2.jpg'
import bird from '../assets/images/bird.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pig} alt="" />
          </span>
          <p>
            閲覧いただきありがとうございます☀️
            このポートフォリオは かやた がgatzby frameworkで作成しました🐖
          </p>
          <h2>
            サイトマップ
          </h2>
          <p>
            WORK‥今まで関わった案件や、プログラミングスキルについて書かれています。
          </p>
          <p>
            ABOUT‥かやたの性格などについて書いてあります。
          </p>
          <p>
            CONTACT‥かやたにメールが送れます。
          </p>

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={sea2} alt="" />
          </span>
          <p>
            今までメディア系のサイト, EC, 受発注システムなどのプロダクトに関わってきました。
          </p>
          <p>
            英語は話せませんが、簡単な文法を使って読み書きができます。（業務上で海外チームとのコミュニケーションができる）
          </p>
          <p>
            技術スタックはRuby on Rails, Vue.js, slim, scssがメインです。実装例についてはこちらの<a href="https://www.wantedly.com/users/62760659" target="_blank">Wantedlyのページ</a>をご参照ください。
          </p>
          <p>
            SEOで検索順位を改善した経験があります。詳しくは<a href="https://letterneginr.hateblo.jp/entry/2019/07/19/212927" target="_blank">こちらの記事</a>をご参照ください。
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={bird} alt="" />
          </span>
          <p>
            2017年からエンジニアをしています。年齢は2020年4月現在、28歳です。
          </p>
          <p>
            バイクに乗ってでかけるのが好きで、最近はひとりで日本茶を埼玉まで買いに行きました。
            お酒が全然飲めません。
          </p>
          <p>
            昔は社会福祉士をしたり、画家を目指したりしていました。
            好きなものを素直に好きと表現できなかった反動が、割と如実に行動に現れていると思います。
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            {/* <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li> */}
            <li>
              <a
                href="https://github.com/ixap2i"
                className="icon fa-github"
                target="_blank"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kayataaa"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main