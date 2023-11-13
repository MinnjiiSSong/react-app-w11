import { Component } from "react";
import Content from "./components/Content";

import TOC from "./components/TOC";
import Subject from "./components/Subject";
import "./App.css";

import welcomeImg from "./img/web.png";
import nobelImg from "./img/achim.jpg";
import pulitzerImg from "./img/trust.jpg";
import akutagawaImg from "./img/hunchiback.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 1,
      subject: { title: "2023", sub: "올해의 책" },
      welcome: { title: "“A room without books is like a body without a soul.”", desc: "― Marcus Tullius Cicero", image: welcomeImg },
      contents: [
        { id: 1, title: "노벨문학상", book:"아침 그리고 저녁", author:"욘 포세", desc: "2023년 노벨문학상 수상의 영예가 욘 포세에게 주어졌다. “입센의 재래” “21세기의 사뮈엘 베케트”라 불리는 노르웨이 작가 욘 포세는 오늘날 세계에서 가장 널리 활동하는 극작가 중 한 명으로 현대 연극의 최전선을 이끌고 있다는 평가를 받아왔다. 희곡 외에도 소설, 시, 에세이, 그림책, 번역에 이르기까지 다양한 장르를 넘나들며 방대한 작품을 써왔고 세계 40여개 이상의 언어로 번역되어 세계적인 주목을 받아왔다. 그의 작품은 군더더기를 극도로 제한하는 미니멀한 구성, 리얼리즘과 부조리주의 사이에서 표현되는 반복화법, 마침표를 배제하고 리듬감을 강조하는 특유의 시적이고 음악적인 문체를 통해 평범한 일상이나 인간관계 속에서 드러나는 삶과 죽음이라는 보편적 문제, 인간 존재에 대한 근본적인 성찰을 예리하고 밀도 있게 그려낸다.", image: nobelImg },
        { id: 2, title: "퓰리처상", book:"트러스트", author:"에르난 디아스", desc: "첫 작품 『먼 곳에서』가 퓰리처상 최종후보에 오르며 단숨에 미국 문단과 전 세계의 주목을 받은 젊은 거장 에르난 디아스. 그가 두번째 장편소설 『트러스트』로 국내에 첫선을 보인다. 1920년대 월 스트리트를 주요 배경으로 한 『트러스트』는 금융계에서 전설적인 성공을 거두며 어마어마한 부를 쌓은 앤드루 베벨과 밀드레드 베벨 부부에 대해 네 가지 서로 다른 이야기를 펼쳐나가면서 경제, 금융, 돈, 권력, 계급 등 오늘날 가장 시급하고 중요한 문제를 다룬다. ‘트러스트’라는 제목이 신뢰와 믿음이라는 가치뿐 아니라 기업합동이라는 경제적 개념을 의미하듯, 이 소설 또한 여러 영역의 ‘트러스트’를 모두 탐구한다. 서로 다른 이야기를 하는 텍스트들이 첨예하게 대립하는 가운데 어떤 내러티브를 믿을 것인가 하는 근본적인 질문을 던지고, 앤드루 베벨과 밀드레드 베벨의 결혼생활을 통해 부부 사이의 신뢰를 이야기하며, 인간사 전체에서 신뢰와 배신이라는 것이 어떤 역할을 하고 있는지를 면밀하게 들여다본다. 그러는 한편으로 작가는 우리의 삶을 지배하는 전능함을 가졌지만 동시에 비실재적이고 허구적인 존재로서의 ‘돈’에 대한 이야기를 펼쳐나간다. 철저한 자료조사를 바탕으로 20세기 초 주식시장과 금융계를 사실적으로 그리며 월 스트리트로 대변되는 금융자본의 특성과 그 추상적인 구조를 파헤치고, 부와 권력이라는 신화의 허상을 우리 앞에 낱낱이 드러낸다. 그리고 자본주의, 금융, 권력, 계급과 같은, 시대를 초월해 현재에도 여전히 시급하고 중요한 문제들을 이야기한다.", image: pulitzerImg },
        { id: 3, title: "아쿠타가와상", book:"헌치백", author:"이치카와 사오", desc: "2023 아쿠타가와상 수상작. 지난 7월 19일에 열린 제169회 아쿠타가와상 시상식. 일본 최고 권위 문학상답게 현지 언론들은 앞다퉈 시상식장으로 몰려들었고, 수상자가 무대에 오르자 평소와 다른 풍경에 기자들은 홀린 듯 플래시를 터트렸다. 전동 휠체어를 타고 기자들 앞에 선 수상자. 바로, 이치카와 사오가 등장하는 순간이었다. 중증 장애인 작가가 아쿠타가와상을 수상한 것은 이번이 최초이며 이 역사적 사건이 『헌치백』을 뜨거운 감자로 만든 건 분명한 사실이다. 그러나 화제의 크기를 본격적으로 키운 요소는 따로 있었으니, 바로 수상작의 파격적인 줄거리와 작품성이다. 『헌치백』은 중증 척추 장애인 샤카가 남성 간병인에게 “내가 임신하고 중절하는 걸 도와주면 1억 엔을 줄게요”라고 제안하면서 벌어지는 이야기로, 심사위원 일부가 난색을 표할 만큼 위악적인 상상력을 숨김없이 표출하는 작품이다. 이렇듯 호불호가 분명히 갈리는 작품이지만, 9명의 심사위원 모두 극찬을 아끼지 않으며 『헌치백』을 만장일치 수상작으로 선정했다.", image: akutagawaImg }
      ],
    };
  }
  render() {
    var _title,
      _book = null,
      _author = null,
      _desc = null,
      _image = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _book = data.book;
          _author = data.author;
          _desc = data.desc;
          _image = data.image;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
        ></TOC>
        <Content title={_title} book={_book} author={_author} desc={_desc} img={_image}></Content>
      </div>
    );
  }
}

export default App;
