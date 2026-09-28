type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function IndexPage({ searchParams }: Props) {
  const { canceled } = await searchParams

  if (canceled) {
    console.log(
      'Order canceled -- continue to shop around and checkout when youre ready.'
    )
  }
  return (
    <form action="/api/checkout_sessions" method="POST">
      <section>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
    </form>
  )
}