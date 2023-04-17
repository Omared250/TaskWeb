import { Link as RouterLink } from 'react-router-dom';
import { HomeOutlined } from "@mui/icons-material"
import { Grid, IconButton, Link, Typography } from "@mui/material"

export const AuthLayaout = ({ children, title = '' }) => {
    return (
        <Grid
            container
            sx={{ minHeight: '100vh', backgroundColor: 'rgba(35, 8, 8, 0.4)', padding: 2}}
        >
            <Grid container
                spacing={ 0 }
                direction="column"
                alignContent="center"
                justifyContent="center"
                sx={{ backgroundImage: `url(${"/src/assets/backwebsite.png"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <Grid item
                    className="box-shadow"
                    xs={ 3 }
                    sx={{ width: { sm: 500 }, backgroundColor: 'white', padding: 3, borderRadius: 2 }}
                >
                    <Typography variant="h5" sx={{ mb: 1 }}>{ title }</Typography>
                    { children  }

                </Grid>
            </Grid>
            <Link component={ RouterLink } to="/">
                <IconButton
                    size='large'
                    sx={{
                        color: 'white',
                        backgroundColor: 'secondary.main',
                        ':hover': { backgroundColor: 'secondary.main', opacity: 0.9 },
                        position: 'fixed',
                        right: 50,
                        bottom: 50,
                    }}
                >
                    <HomeOutlined sx={{ fontSize: 30 }}/>
                </IconButton>
            </Link>
        </Grid>
    )
}
