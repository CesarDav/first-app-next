# Notas de la primera clase 

## El compoenent `<Head/>` 
    1 Te permite cambiar el meta header de una vista
    
    2 Documentacion : https://nextjs.org/docs/api-reference/next/head

## Compilador
    1 En la version 12 cambio el compilador a rust
   
    2 Documentacion: https://nextjs.org/blog/next-12

## Conceptos a dominar
    1 Static generation:
        - next por defecto usara el static generation hasta donde sea posible
        - esta forma solo ejecto al momento de la construccion del sitio o aplicaccion (cuando ejecutas el yarn build o npm build), es algo que no va a cambiar(muy util para paginas estaticas como landing)

    2 Server-side Rendering:
        - esta forma se va a ejecutar cada vez que el cliente haga una solicitud. 

    3 Definimos estas formas de trabajar con ciertas funcionas 

    4 Leer documentacion sobre estos concetos:
      https://nextjs.org/docs/basic-features/pages#two-forms-of-pre-rendering

    5 Next permite que las aplicaicons funcionen sin javascript, eso ayuda a la indexacion de los bot de google. 

## Componente `<Link/>` 
    1 El elemento <Link/> de next permite precargar las vista antes que el usuario vaya a dicha vista(prefetch).

    2 Documentacion : https://nextjs.org/docs/api-reference/next/link

    3 El elemento <Link/> no se puede estilizar 

## Carpeta "pages"
    1 En la carpeta de pages solo puede ir paginas, api rest, midellware(en duda)

## Importar css. 
    1 Para importar css no puedes usar la importacion tradiconal. Tienes que usar la importacion por module.
    Ejemplo: styles.module.css 
    
    2 La forma enque tienes que aplicar en los elementos es la siguente:
        styles.estilos

    3 Para aplicar clases con caracteres ejemplo: container-div , tienes que computarlo: styles['container-div']

## Layouts
    1 Leer documentacion: https://nextjs.org/docs/basic-features/layouts

## Pasar una aplicacion hecha en next de javascript a Typescript
    1 Leer documentaion: https://nextjs.org/learn/excel/typescript/create-tsconfig

## Next con Typescript
    1 Leer documentacion: https://nextjs.org/learn/excel/typescript/nextjs-types

## Deployment
    1 Leer documentaion: https://nextjs.org/docs/deployment



## Investigar
    1 Componentes de order superior
