import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { motion } from 'framer-motion';

// Mock data for popular courses
const popularCourses = [
  {
    id: 1,
    title: 'Advanced AI & Machine Learning',
    instructor: 'Dr. Sarah Chen',
    rating: 4.8,
    students: 1234,
    duration: '12 weeks',
    price: '$199.99',
    image: 'https://source.unsplash.com/random/800x600?ai',
    tags: ['AI', 'Machine Learning', 'Advanced'],
  },
  {
    id: 2,
    title: 'Quantum Computing Fundamentals',
    instructor: 'Prof. James Wilson',
    rating: 4.9,
    students: 856,
    duration: '10 weeks',
    price: '$179.99',
    image: 'https://source.unsplash.com/random/800x600?quantum',
    tags: ['Quantum', 'Computing', 'Physics'],
  },
  {
    id: 3,
    title: 'Cybersecurity Masterclass',
    instructor: 'Alex Thompson',
    rating: 4.7,
    students: 2103,
    duration: '14 weeks',
    price: '$249.99',
    image: 'https://source.unsplash.com/random/800x600?cybersecurity',
    tags: ['Security', 'Ethical Hacking', 'Advanced'],
  },
];

const Home = () => {
  const theme = useTheme();
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [difficulty, setDifficulty] = useState('all');

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Box sx={{ pt: 8, pb: 6 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(45deg, rgba(0,242,255,0.1) 0%, rgba(255,0,255,0.1) 100%)',
          py: 8,
          mb: 6,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'Orbitron',
                    fontWeight: 700,
                    mb: 2,
                    background: 'linear-gradient(45deg, #00f2ff, #ff00ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Learn the Future
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
                  Discover cutting-edge courses in AI, Quantum Computing, and more.
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search for courses..."
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(45deg, #00f2ff, #ff00ff)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #00d4e0, #e600e6)',
                    },
                  }}
                >
                  Explore Courses
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  component="img"
                  src="https://source.unsplash.com/random/800x600?education"
                  alt="Education"
                  sx={{
                    width: '100%',
                    borderRadius: 4,
                    boxShadow: '0 0 30px rgba(0,242,255,0.3)',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Filters Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
              Price Range
            </Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={300}
              step={10}
              sx={{
                color: 'primary.main',
                '& .MuiSlider-thumb': {
                  '&:hover, &.Mui-focusVisible': {
                    boxShadow: '0 0 0 8px rgba(0,242,255,0.16)',
                  },
                },
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <Typography variant="body2">${priceRange[0]}</Typography>
              <Typography variant="body2">${priceRange[1]}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
              Difficulty Level
            </Typography>
            <FormControl fullWidth>
              <Select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                sx={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <MenuItem value="all">All Levels</MenuItem>
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Container>

      {/* Popular Courses Section */}
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <TrendingUpIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h4" sx={{ fontFamily: 'Orbitron', fontWeight: 600 }}>
            Popular Courses
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {popularCourses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(26, 26, 63, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0,242,255,0.2)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 10px 20px rgba(0,242,255,0.2)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={course.image}
                    alt={course.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 1,
                        fontFamily: 'Orbitron',
                        fontWeight: 500,
                      }}
                    >
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {course.instructor}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <StarIcon color="primary" sx={{ mr: 0.5 }} />
                      <Typography variant="body2" sx={{ mr: 1 }}>
                        {course.rating}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ({course.students} students)
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <AccessTimeIcon sx={{ mr: 0.5, fontSize: 20 }} />
                      <Typography variant="body2">{course.duration}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                      {course.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            background: 'rgba(0,242,255,0.1)',
                            color: 'primary.main',
                            '&:hover': {
                              background: 'rgba(0,242,255,0.2)',
                            },
                          }}
                        />
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        background: 'linear-gradient(45deg, #00f2ff, #ff00ff)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #00d4e0, #e600e6)',
                        },
                      }}
                    >
                      {course.price}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 