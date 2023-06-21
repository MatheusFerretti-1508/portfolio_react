import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at
        delectus mollitia molestiae tempore veniam excepturi accusantium nobis
        ducimus, inventore dolore libero animi eveniet deserunt sit temporibus
        exercitationem nemo magnam.
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=MatheusFerretti-1508&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MatheusFerretti-1508&layout=compact&langs_count=7&theme=dracula" />
      </GithubSecao>
    </section>
  )
}

export default Sobre
