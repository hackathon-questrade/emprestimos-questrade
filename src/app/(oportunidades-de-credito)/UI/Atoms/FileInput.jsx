import { Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import BasicButton from './BasicButton'
import SentButton from './SentButton';

export default function FileInput() {
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Lógica para lidar com o arquivo selecionado
    setFileUploaded(true);
    submitForm();
  };

  const submitForm = () => {
    // Lógica para enviar o formulário
    console.log('Formulário enviado!');
  };

  return (
    <Flex direction='column' gap={5}>
      <Input border="none" type="file" accept="image/*, .pdf" onChange={handleFileChange} />
      {fileUploaded
        ? <SentButton>Enviado</SentButton>
        : <BasicButton onClick={submitForm} type='submit'>Enviar imagem</BasicButton>
      }
    </Flex>
  )
}
