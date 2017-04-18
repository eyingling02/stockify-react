const React = require('react')
const UserPortfolio = () => (
  <div>
    <p className="my-portfolio">Portfolio</p>
    <table className="table table-striped">
        <tr>
          <th>Symbol</th>
          <th>Current Price</th>
          <th>Expected Price</th>
          <th>Countdown</th>
          <th>Current Gain/Loss</th>
          <th>Lifetime Gain/Loss</th>
          <th>Best Streak</th>
          <th>Best Stretch</th>
        </tr>
        <tr>
          <td>ALL (averages)  </td>
          <td>Avg: $210</td>
          <td>Avg: +4%</td>
          <td>Avg: 23 days</td>
          <td>Avg: +$120</td>
          <td>Avg: $2,000</td>
          <td>5 in a row</td>
          <td>300/380 over 90 days</td>
        </tr>
        <tr>
          <td>NVDA Nvidia</td>
          <td>$107</td>
          <td>$120</td>
          <td>10 days</td>
          <td>+$90</td>
          <td>Correct $12000</td>
          <td>10 in a row</td>
          <td>20/24 over 200 days</td>
        </tr>
        <tr>
          <td>TSLA Tesla Motors</td>
          <td>$209</td>
          <td>$190</td>
          <td>200 days</td>
          <td>Correct -$100 </td>
          <td>Incorrect $19,000</td>
          <td>15 in a row</td>
          <td>36/44 over 100 days</td>
        </tr>
        <tr>
          <td>YELP Yelp</td>
          <td>$38</td>
          <td>$45</td>
          <td>60 days</td>
          <td>+$10</td>
          <td>Correct $1200</td>
          <td>4 in a row</td>
          <td>12/20 over 100 days</td>
        </tr>
        <tr>
          <td>ROST Ross Stores</td>
          <td>$65</td>
          <td>$80</td>
          <td>90 days</td>
          <td>Correct $100 </td>
          <td>Correct $1,211</td>
          <td>2 in a row</td>
          <td>5/10 over 99 days</td>
        </tr>
        <tr>
          <td>FB Facebook</td>
          <td>$115</td>
          <td>$115</td>
          <td>30 days</td>
          <td>+$105</td>
          <td>Correct $241</td>
          <td>41 in a row</td>
          <td>43/50 over 200 days</td>
        </tr>
        <tr>
          <td>TSLA Tesla Motors</td>
          <td>$209</td>
          <td>$190</td>
          <td>200 days</td>
          <td>Correct -$100 </td>
          <td>Incorrect $19,000</td>
          <td>15 in a row</td>
          <td>36/44 over 100 days</td>
        </tr>
        <tr>
          <td>GOOG Google</td>
          <td>$772</td>
          <td>$800</td>
          <td>5 days</td>
          <td>+$90</td>
          <td>Correct $199</td>
          <td>5 in a row</td>
          <td>21/30 over 111 days</td>
        </tr>
        <tr>
          <td>NFLX Netflix</td>
          <td>$124</td>
          <td>$135</td>
          <td>100 days</td>
          <td>Correct $150 </td>
          <td>Correct $912</td>
          <td>9 in a row</td>
          <td>23/34 over 240 days</td>
        </tr>
        <tr>
          <td>NVDA Nvidia</td>
          <td>$107</td>
          <td>$120</td>
          <td>10 days</td>
          <td>+$90</td>
          <td>Correct $12000</td>
          <td>10 in a row</td>
          <td>20/24 over 200 days</td>
        </tr>
        <tr>
          <td>TSLA Tesla Motors</td>
          <td>$209</td>
          <td>$190</td>
          <td>200 days</td>
          <td>Correct -$100 </td>
          <td>Incorrect $19,000</td>
          <td>15 in a row</td>
          <td>36/44 over 100 days</td>
        </tr>
        <tr>
          <td>YELP Yelp</td>
          <td>$38</td>
          <td>$45</td>
          <td>60 days</td>
          <td>+$10</td>
          <td>Correct $1200</td>
          <td>4 in a row</td>
          <td>12/20 over 100 days</td>
        </tr>
        <tr>
          <td>ROST Ross Stores</td>
          <td>$65</td>
          <td>$80</td>
          <td>90 days</td>
          <td>Correct $100 </td>
          <td>Correct $1,211</td>
          <td>2 in a row</td>
          <td>5/10 over 99 days</td>
        </tr>
        <tr>
          <td>FB Facebook</td>
          <td>$115</td>
          <td>$115</td>
          <td>30 days</td>
          <td>+$105</td>
          <td>Correct $241</td>
          <td>41 in a row</td>
          <td>43/50 over 200 days</td>
        </tr>
        <tr>
          <td>TSLA Tesla Motors</td>
          <td>$209</td>
          <td>$190</td>
          <td>200 days</td>
          <td>Correct -$100 </td>
          <td>Incorrect $19,000</td>
          <td>15 in a row</td>
          <td>36/44 over 100 days</td>
        </tr>
        <tr>
          <td>GOOG Google</td>
          <td>$772</td>
          <td>$800</td>
          <td>5 days</td>
          <td>+$90</td>
          <td>Correct $199</td>
          <td>5 in a row</td>
          <td>21/30 over 111 days</td>
        </tr>
        <tr>
          <td>NFLX Netflix</td>
          <td>$124</td>
          <td>$135</td>
          <td>100 days</td>
          <td>Correct $150 </td>
          <td>Correct $912</td>
          <td>9 in a row</td>
          <td>23/34 over 240 days</td>
        </tr>
    </table>
  </div>
)

module.exports = UserPortfolio
