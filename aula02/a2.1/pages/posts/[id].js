import NextLink from 'next/link';
import { Box, Text } from '@skynexui/components';
import { useRouter } from 'next/router';
import dados from '../../dados.json';

// dica dos paths estáticos
export async function getStaticPaths() {
  // const paths = [
  //   { params: { id: '1' } },
  //   { params: { id: '2' } },
  //   { params: { id: '3' } }
  // ]
  const paths = dados.posts.map((postAtual) => {
    return { params: { id: `${postAtual.id}` } };
  })
  console.log('dados:', dados);
  console.log('paths:', paths);

  return {
    paths: paths,
    fallback: false // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  console.log('Contexto', context.params.id);
  const id = context.params.id;

  const post = dados.posts.find((currentPost) => {
    if(currentPost.id === id) {
      return true;
    }
    return false;
  })

  console.log(post);

  return {
    props: {
      id: post.id,
      title: /* `Post: [${context.params.id}]`  */post.title,
      date: /* `11/11/1111` */post.date,
      content: /* `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.` */post.content,
    }, 
  }
}

export default function PostByIdScreen(props) {
  // console.log(props);
  const router = useRouter();
  // console.log(router);
  const post = {
    title: props.title,
    date: props.date,
    content: props.content,
  };

  if(router.isFallback) {
    return 'Essa página não existe!';
  }

  return (
    <Box
      styleSheet={{
        flexDirection: 'column',
        margin: '32px auto',
        maxWidth: '700px',
        paddingHorizontal: '16px',
      }}
    >
      {/* Cabeçalho */}
      <Text
        variant="heading2"
        tag="h1"
        styleSheet={{ color: '#F9703E', justifyContent: 'center', lineHeight: '1.2' }}
      >
        {post.title}
      </Text>
      <Text styleSheet={{ color: '#F9703E', justifyContent: 'center', borderBottom: '1px solid #F9703E', paddingVertical: '16px', marginVertical: '16px' }}>
        {post.date}
      </Text>

      {/* Área de Conteudo */}
      <Box
        styleSheet={{
          flexDirection: 'column',
        }}
      >
        <Text>
          {post.content}
        </Text>

        {post.video && <iframe style={{ marginTop: '32px', minHeight: '400px' }} src={post.video} /> }
      </Box>


      {/* Rodapé */}
      <Box
        styleSheet={{
          marginTop: '16px',
          paddingVertical: '16px',
          borderTop: '1px solid #F9703E',
          color: '#F9703E',
        }}
      >
        <NextLink href="/" passHref>
          <Text tag="a" styleSheet={{ hover: { textDecoration: 'underline' } }}>
            Voltar para a home
          </Text>
        </NextLink>
      </Box>
    </Box>
  )
}
