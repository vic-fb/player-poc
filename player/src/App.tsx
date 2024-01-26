import ReactPlayer from 'react-player'


interface Props {
    src: string | undefined ;
}
function App({src}:Props) {
  return (
    <>
        <ReactPlayer playing={true} muted={true} controls={true} url={src} />
    </>
  )
}

export default App
