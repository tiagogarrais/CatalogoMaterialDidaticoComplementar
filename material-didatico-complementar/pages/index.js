
import Image from 'next/image'
import cpTeoriasAtomicas from '../src/imagens/caca-palavras-teorias-atomicas.png'
import jmFungos from '../src/imagens/jogo-memoria-biologia-fungos.png'

export default function Index() {

  return (
    <div>
      <main>
        <h1>Catálogo organizado de Material Didático Complementar</h1>
        <div className="disciplinas">
          <hr />
          <h2>Física</h2>
          <h3>Teorias atômicas</h3>
          <div className="cartao">
            <div className="conteudo">
              <a
                href="https://www.conexaofuturo.com.br/mod/hvp/view.php?id=36"
                target="_blanc"
              >
                <Image
                  src={cpTeoriasAtomicas}
                  alt="Caça palavras teorias atômicas"
                >
                </Image>
              </a>

              <h4>Caça palavras com o tema Teorias atômicas</h4>
              <p>Conteúdo oferecido por {''}
                <a
                  href="http://lattes.cnpq.br/4185468934421540"
                  target="_blanc"
                >
                  Professora Julia Andreina</a></p>
            </div>
          </div>
          <hr/>
          <h2>Biologia</h2>
          <h3>Fungos</h3>
          <div className="cartao">
            <div className="conteudo">
              <a
                href="https://www.conexaofuturo.com.br/mod/hvp/view.php?id=40"
                target="_blanc"
              >
                <Image
                  src={jmFungos}
                  alt="Jogo da memória com o tema fungos"
                >
                </Image>
              </a>

              <h4>Caça palavras com o tema Teorias atômicas</h4>
              <p>Conteúdo oferecido por {''}
                <a
                  href="http://lattes.cnpq.br/4185468934421540"
                  target="_blanc"
                >
                  Professora Julia Andreina</a></p>
            </div>
          </div>
        </div>

       
      </main>
    </div>
  )
}
