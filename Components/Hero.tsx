import Image from "next/image"
const Hero = () => {
  return (
    <div >
      <div className="flex font-bold p-2 "
      >
      <Image src="\livroHeader.svg" 
      width={40} height={40} alt="livro" />
      <div className="flex flex-row">
      <div className="text-black mt-2 ml-1">
        Bem Vindo 
      </div>
        </div>
        </div>

        <div className="text-black flex flex-col">
          Notícias
          <div className="grid justify-center bg-slate-50 border-solid
          shadow-2xl float-left relative h-[150px] w-full p-1  my-5">
            <div className="p-1 pr-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Quisque at lectus nec lorem fermentum interdum. In vitae turpis vitae erat interdum vehicula. 
Nullam nec velit at magna dictum gravida sit amet non mi. Donec at sagittis erat, vel tempor libero.
 Suspendisse potenti. Curabitur euismod, felis ut egestas dignissim, nisl est tincidunt arcu,
  ac condimentum turpis mi eget purus. Etiam sit amet arcu velit. Integer luctus,
   nibh id viverra feugiat, libero metus lacinia justo, ut lacinia lacus justo in velit.
            </div>

          </div>
          <div className="grid justify-center bg-slate-50 border-solid
          shadow-2xl float-left relative h-[150px] w-full p-1  my-5">
            <div >
              Mais um conteudo de Noticias aqui
            </div>
          </div>
          
        </div>


    </div>

  )
}

export default Hero