import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>株式会社AZUKI総合コンサルティング</h1>
          <nav>
            <a href="#services">事業内容</a>
            <a href="#company">会社概要</a>
            <a href="#contact">お問い合わせ</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h2>税理士の視点で、その先へ。</h2>
            <p className="subtitle">財務コンサルティングで『潰れない会社』を創る。</p>
            <p>
              私たちは、税務の専門家としての知見を活かし、貴社の財務基盤を強化し、持続的な成長をサポートするコンサルティングファームです。キャッシュフローの改善から、未来を見据えた資産形成まで、経営のあらゆる課題に寄り添い、共に解決策を見つけ出します。
            </p>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2>未来を切り拓く、4つのソリューション</h2>
            <div className="service-grid">
              <div className="service-item">
                <h3>財務コンサルティング</h3>
                <p>資金繰りの悩み、どんぶり勘定から脱却しませんか？キャッシュフローの改善、経営の「見える化」を徹底サポート。さらに金融機関の格付けアップに向けた取り組みを伴走支援し、盤石な経営基盤を築きます。</p>
              </div>
              <div className="service-item">
                <h3>保険・金融商品によるリスクマネジメント</h3>
                <p>役員退職金準備や事業承継、節税対策まで、法人・個人事業主様のあらゆるニーズに対応。オペレーティングリース等を活用した税負担の繰り延べなど、貴社の状況に最適なプランをご提案します。</p>
              </div>
              <div className="service-item">
                <h3>税制優遇・補助金活用サポート</h3>
                <p>「経営力向上計画」による税制優遇はもちろん、複雑で手間のかかる各種補助金の申請も強力にサポートします。貴社が活用できる制度を見つけ出し、採択の可能性を高める事業計画の策定から申請まで、一貫してご支援することで、新たな投資や事業展開を後押しします。</p>
              </div>
              <div className="service-item">
                <h3>ワンストップ専門家ネットワーク</h3>
                <p>税理士はもちろん、弁護士、司法書士、社会保険労務士など、各分野の専門家と緊密に連携。あらゆる経営課題に対して、ワンストップで最適なソリューションを提供できる体制を整えています。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="company" className="company-profile">
          <div className="container">
            <h2>会社概要</h2>
            <table>
              <tbody>
                <tr>
                  <th>会社名</th>
                  <td>株式会社AZUKI総合コンサルティング</td>
                </tr>
                <tr>
                  <th>所在地</th>
                  <td>大阪府門真市新橋町3-3-304</td>
                </tr>
                <tr>
                  <th>設立</th>
                  <td>令和6年5月28日</td>
                </tr>
                <tr>
                  <th>代表者</th>
                  <td>山本尚輝</td>
                </tr>
                <tr>
                  <th>資本金</th>
                  <td>800万円</td>
                </tr>
                <tr>
                  <th>事業内容</th>
                  <td>財務コンサルティング、保険代理店業務、税制優遇・補助金活用支援、専門家ネットワークによる経営支援</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2>お問い合わせ</h2>
            <p>ご相談、サービスに関するご質問など、お気軽にお問い合わせください。</p>
            {/* 実際のフォームは後工程で実装します */}
            <a href="mailto:info@azuki-consulting.com" className="cta-button">メールでのお問い合わせ</a>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <div className="container">
          <p>&copy; 2024 株式会社AZUKI総合コンサルティング. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;