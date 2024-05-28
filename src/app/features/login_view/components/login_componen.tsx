// import React from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { TextField, Button, Box, Typography, Container, CssBaseline } from '@mui/material';


// interface IFormInput {
//   email: string;
//   password: string;
// }

// const Login: React.FC = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

//   const onSubmit: SubmitHandler<IFormInput> = data => {
//     console.log(data);
//     // Aquí puedes manejar la autenticación, por ejemplo, enviando los datos a tu API
//   };

//   return (
    
//     <Container 
//       component="main"
//       maxWidth="xl"
//       sx={{
//         backgroundImage: `url('/img/scotiabank.png')`,
//         backgroundSize: '40%',// 100px',  // Ajusta el tamaño de la imagen aquí
//         backgroundRepeat: 'no-repeat', 
//         //backgroundPosition: '20%', // Evita que la imagen se repita
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center ',
//         justifyContent: 'center'
//       }}
//     >
//       <CssBaseline />
//       <Box
//         sx={{
//           backgroundColor: 'rgba(255, 255, 255, 0.8)',
//           padding: 4,
//           borderRadius: 2,
//           boxShadow: 3,
//           marginLeft: '40%',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
        

//         <Box  width={'70%'} sx={{ textAlign: 'center ' }}>
          
//         <Container
//           component="main"
//           maxWidth="xl"
//           sx={{
//             backgroundImage: `url('/img/logo_scotia.svg')`,
//             backgroundSize: '100%',// 100px',  // Ajusta el tamaño de la imagen aquí
//             backgroundRepeat: 'no-repeat',  // Evita que la imagen se repita
//             minHeight: '10vh',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center'
            
//           }}
//         >
//         </Container>
//         </Box>
//         <Typography component="h1" variant="h5">
//           Iniciar Sesión
//         </Typography>
//         <Box  component="form" onSubmit={handleSubmit(onSubmit)}  sx={{ mt: 1} }>
//           <TextField
//             margin="normal"
//             fullWidth
//             label="Correo Electrónico"
//             autoComplete="email"
//             autoFocus
//             {...register('email', { required: 'Correo Electrónico es requerido' })}
//             error={!!errors.email}
//             helperText={errors.email ? errors.email.message : ''}
//           />
//           <TextField
//             margin="normal"
//             fullWidth
//             label="Contraseña"
//             type="password"
//             autoComplete="current-password"
//             {...register('password', { required: 'Contraseña es requerida' })}
//             error={!!errors.password}
//             helperText={errors.password ? errors.password.message : ''}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Iniciar Sesión
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Box, Typography, Container, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Container as InversifyContainer } from 'inversify';
import 'reflect-metadata';
import { AuthService } from '../../dashboard/data/repositories/login';
import {AppRoutesNamedFullPath } from '../../../routes/app_routes_named';
import { loginControllerProvider } from '../login_controller';

const inversifyContainer = new InversifyContainer();
inversifyContainer.bind(AuthService).toSelf();

interface IFormInput {
  user: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const controller = loginControllerProvider(state => state.object);
  const navigate  = useNavigate();


  const onSubmit: SubmitHandler<IFormInput> = async data => {
    setIsLoading(true);
    setError(null);
    try {
      console.log("111");
      console.log(controller)
      const response = await controller?.auth(data.user, data.password);

      if (response?.success === true){
        navigate(AppRoutesNamedFullPath.PARTNERS, { replace: true });
      } else{
        throw new Error("");
        
      }

    } catch (error) {

      setError('Error durante la autenticación');
      console.log("aqui ocurre algo2",error)
    } finally {
      setIsLoading(false);
      console.log("aqui ocurre algo",setIsLoading)
    }
  };

  return (
    <Container 
      component="main"
      maxWidth="xl"
      sx={{
        backgroundImage: `url('/img/scotiabank.png')`,
        backgroundSize: '40%',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          marginLeft: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box width={'70%'} sx={{ textAlign: 'center' }}>
          <Container
            component="main"
            maxWidth="xl"
            sx={{
              backgroundImage: `url('/img/logo_scotia.svg')`,
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              minHeight: '10vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />
        </Box>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            label="Usuario"
            type="user"
            autoComplete="user"
            autoFocus
            {...register('user', { required: 'Usuario es requerido' })}
            error={!!errors.user}
            helperText={errors.user ? errors.user.message : ''}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            {...register('password', { required: 'Contraseña es requerida' })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
          />
          <Button
         
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
           
          >
            {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;