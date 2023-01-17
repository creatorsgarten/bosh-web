import { Title } from 'solid-start'
import Counter from '~/components/Counter'

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <Counter />
      <div class="flex h-screen justify-center">
        <h1 class="text-3xl font-thin">Hello World</h1>
      </div>
    </main>
  )
}
