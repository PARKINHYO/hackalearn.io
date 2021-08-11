import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="home"/>
    <br></br>
    <p>이 페이지는 현재 HackaLearn 클라우드 스킬 챌린지의&nbsp;
      <a target="_blank" href="https://docs.microsoft.com/ko-kr/learn/modules/create-deploy-static-webapp-gatsby-app-service/">
      Gatsby 및 Azure Static Web Apps를 사용하여 정적 웹앱 만들기</a>를 학습하고 azure로 배포되고 있는 페이지입니다. 
    </p>
    <br></br><br></br>
    <h3>HackaLearn이란❓</h3>
    <p><b>Hackathon + Learn의 합성어</b>로 주어진 기간 안에 관련 지식을 직접 배워서 해커톤에 적용하는 이벤트라고 할 수 있습니다!!</p>
    <br></br><br></br>
    <h3>이번 hackalearn에서는..❗❗</h3>
    <p>이번 hackalearn의 주제는 <a target="_blank" href="https://azure.microsoft.com/ko-kr/services/app-service/static/?WT.mc_id=devcloud-33673-juyoo&ocid=AID3035096">
      Azure Static Web Apps</a>와&nbsp;<a target="_blank" href="https://github.com/features/actions">Github Actions</a>입니다! 이 2개의 주제를 2주동안 공부하고, 
    직접 웹 애플리케이션(현재 페이지 같은!)을 만들어 보는 event입니다.
    다같이 멋진 애플리케이션을 만들어 보아요. ㅎㅎ <b>푸짐한 상품</b>도 기다리고 있답니다!</p>
    <form target="_blank"action="http://aka.ms/hackalearn/register">
    <input type="submit" value="참가 신청하기" />
    </form>
    <br></br><br></br>
    <h3>일정🕧</h3>
    <p>
      <ul>
        <li>참가 신청기간: 2021년 8월 2일 0시 - 2021년 8월 16일 0시</li>
        <li>결과제출 마감기한: 2021년 8월 16일 0시</li>
        <li>심사 기간: 2021년 8월 16일 - 19일</li>
        <li>수상자 발표: 2021년 8월 20일</li>
      </ul>
    </p>
    <br></br><br></br>
    <h3>참여 자격✅</h3>
    <p>참여하고 싶은 누구나 가능합니다!! 단, <b>행사 기간 중 한국내에 거주하셔야 합니다!</b></p>
    <br></br><br></br>
    <h3>참여 방법🔍</h3>
    <p>
      <ol>
        <li>위에 참가 버튼을 통해서 HackaLearn 이벤트에 참가 신청해주세요.</li>
        <li>아래 챌린지 미션을 모두 완료합니다.</li>
        <li>챌린지 미션을 완료할 때 마다 PR을 생성하여 운영진에게 제출합니다.</li>
        <li>챌린지 도중 궁금한 사항이 있을 땐 언제든 <a target="_blank" href="https://github.com/devrel-kr/HackaLearn/discussions">질문/답변</a> 방을 이용해 주세요.</li>
      </ol>
    </p>
    <br></br><br></br>
    <h3>챌린지 미션📜</h3>
    <p>
      <ol>
        <li>클라우드 스킬 챌린지 애저 정적 웹 앱 <a target="_blank" href="https://github.com/devrel-kr/HackaLearn/blob/main/challenges/ASWA.md">Learn</a></li>
        <li>클라우드 스킬 챌린지 깃헙 액션 <a target="_blank" href="https://github.com/devrel-kr/HackaLearn/blob/main/challenges/GHA.md">Learn</a></li>
        <li><a target="_blank" href="https://github.com/devrel-kr/HackaLearn/blob/main/challenges/SOCIAL.md">SNS 인증 챌린지</a></li>
        <li>웹 애플리케이션 챌린지 <a target="_blank" href="https://github.com/devrel-kr/HackaLearn/blob/main/challenges/APP.md">Hackaton</a></li>
        <li><a target="_blank" href="https://github.com/devrel-kr/HackaLearn/blob/main/challenges/REPO.md">깃헙 저장소 챌린지</a>(만든 애플리케이션 저장소)</li>
        <li><a target="_blank" href="https://github.com/devrel-kr/HackaLearn/blob/main/challenges/RETRO.md">블로그 후기 남기기 챌린지</a></li>
      </ol>
    </p>
    <br></br><br></br>
    <h3>명예의 전당🎈</h3>
    <p>여섯 가지 챌린지 미션을 모두 완료한 팀은 <a target="_blank" href="https://github.com/devrel-kr/HackaLearn/blob/main/HALL_OF_FAME.md">
      명예의 전당</a>에 기록이 됩니다!!</p>
    <br></br><br></br>
    <h3>핸즈온 랩 세션🎤</h3>
    <p>HackaLearn 기간 중 다양한 핸즈온 랩 세션을 준비했습니다. 같이 만들어보고, 여러분의 애플리케이션 개발에 적용시켜 보세요!</p>
    <table>
	    <th>제목</th>
      <th>스트리밍</th>
      <th>슬라이드</th>
      <th>샘플코드</th>
	      <tr>
	        <td>GCE와 함께하는 깃헙 액션 만들기</td>
          <td><a target="_blank" href="https://www.youtube.com/watch?v=e_elLW6uNSc">링크</a></td>
          <td><a target="_blank" href="https://github.com/devrel-kr/HackaLearn/raw/main/workshops/workshop-gha-youjinjung.pdf">링크</a></td>
          <td><a target="_blank" href="https://github.com/jung-youjin/hackalearn-2021-github-actions-workshop">링크</a></td>
        </tr>
        <tr>
          <td>MLSA와 함께하는 애저 정적 웹 앱 만들기</td>
          <td><a target="_blank" href="https://www.youtube.com/watch?v=Hxkv6AjAisY">링크</a></td>
          <td><a target="_blank" href="https://github.com/devrel-kr/HackaLearn/raw/main/workshops/workshop-aswa-youjinkim.pdf">링크</a></td>
          <td>링크</td>
	      </tr>
	      <tr>
          <td>클라우드 아드보캇과 함께하는 블로그 사이트 만들기</td>
          <td><a target="_blank" href="https://www.youtube.com/watch?v=x3j3mDblqMY">링크</a></td>
          <td><a target="_blank" href="https://github.com/devrel-kr/HackaLearn/raw/main/workshops/workshop-blog-justinyoo.pdf">링크</a></td>
          <td><a target="_blank" href="https://github.com/justinyoo/hackalearn-hol-gatsby-dotnet">링크</a></td>
	      </tr>
    </table>
    <br></br><br></br>
    <h3>👩‍🏫기술 멘토👨‍🏫</h3>
    <p>HackaLearn 기간중 챌린지를 완수하기 위한 기술적인 문제들에 대해 궁금한 점이 있으신가요? 
      여기 MLSA, GCE, CA 및 다양한 현장 전문가 분들께서 여러분들이 HackaLearn 기간중 겪는 
      여러가지 기술적인 문제 해결에 멘토링을 해 주실 예정입니다.</p>
    <table>
      <tr>
        <td><center><img src="https://github.com/devrel-kr/HackaLearn/raw/main/mentors/chulhyuncho.png" alt="My Image"></img></center></td>
        <td><center><img src="https://github.com/devrel-kr/HackaLearn/raw/main/mentors/suekim.jpg" alt="My Image"></img></center></td>
        <td><center><img src="https://github.com/devrel-kr/HackaLearn/raw/main/mentors/aimeepark.jpg" alt="My Image"></img></center></td>
        <td><center><img src="https://github.com/devrel-kr/HackaLearn/raw/main/mentors/jaylim.jpg" alt="My Image"></img></center></td>
        <td><center><img src="https://github.com/devrel-kr/HackaLearn/raw/main/mentors/minhoryang.jpg" alt="My Image"></img></center></td>
      </tr>
      
      <tr>
        <td><center><b>일반</b><br></br><a target="_blank" href="https://github.com/devrel-kr/HackaLearn/tree/main/mentors#chulhyuncho">조철현 멘토 </a><br></br>(재)이노베이션 아카데미</center></td>
        <td><center><b>기획</b><br></br><a target="_blank" href="https://github.com/devrel-kr/HackaLearn/tree/main/mentors#suekim">김수정 멘토</a> <br></br>Angelhack</center></td>
        <td><center><b>UX</b><br></br><a target="_blank" href="https://github.com/devrel-kr/HackaLearn/tree/main/mentors#aimeepark">박정은 멘토</a> <br></br>IBM</center></td>
        <td><center><b>프론트엔드</b><br></br><a target="_blank" href="https://github.com/devrel-kr/HackaLearn/tree/main/mentors#jaylim">임지호 멘토</a> <br></br>마켓컬리</center></td>
        <td><center><b>백엔드</b><br></br><a target="_blank" href="https://github.com/devrel-kr/HackaLearn/tree/main/mentors#minhoryang">양민호 멘토</a> <br></br>커먼컴퓨터</center></td>
      </tr>
    </table>
    <br></br><br></br>
    <h3>시상 부문💯</h3>
    <p>
      <ul>
        <li>여섯 가지 모든 챌린지를 완료한 참가자 전부</li>
        <li>가장 창의적인 애플리케이션 – 한 팀</li>
        <li>가장 UX가 뛰어난 애플리케이션 – 한 팀</li>
        <li>가장 사회 공헌적인 애플리케이션 – 한 팀</li>
      </ul>
    </p>
    <br></br><br></br>
    <h3>시상품💜</h3>
    <p>
      <ul>
        <li>가장 창의적인 애플리케이션 – 한 팀 – JBL Charge 4</li>
        <li>가장 UX가 뛰어난 애플리케이션 – 한 팀 – 마이크로소프트 서피스 헤드폰 2</li>
        <li>가장 사회 공헌적인 애플리케이션 – 한 팀 – 마이크로소프트 서피스 랩탑 4</li>
      </ul>
    </p>
    <img src="https://github.com/devrel-kr/HackaLearn/raw/main/assets/prizes-768x432@2.png" alt="My Image"></img>
    <br></br><br></br>
    <h3>개인정보 보호정책👨‍✈️</h3>
    <p>
      HackaLearn Korea는 여러분의 개인 정보를 소중히 여깁니다. 개인 정보 보호와 관련한 자세한 내용은&nbsp;
       <a target="_blank" href="https://github.com/devrel-kr/HackaLearn/blob/main/PRIVACY_POLICY.md">개인정보 보호정책 페이지</a>를 참고해 주세요.
    </p>
    <br></br><br></br>
    <h3>행동 강령 Code of Conduct👩‍👩‍👦‍👦</h3>
    <p>
    HackaLearn Korea는 참가자 여러분들 모두가 행사 기간 중 마음 편안하게 참여하실 수 있게끔 모두에게 공정하고 상호 존중하도록 행동 강령을 정하고 있습니다. 
    좀 더 자세한 내용은 <a target="_blank" href="https://github.com/devrel-kr/HackaLearn/blob/main/CODE_OF_CONDUCT.md">행동 강령 페이지</a>를 참고해 주세요.
    </p>
    <br></br><br></br>
    <h3>후원🙏</h3>
    <p>이 행사는 마이크로소프트에서 후원합니다.</p>
    <img src="https://github.com/devrel-kr/HackaLearn/raw/main/assets/logo-microsoft.png" alt="My Image"></img>
  </Layout>
)

export default IndexPage
