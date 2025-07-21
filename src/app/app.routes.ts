import { Routes } from '@angular/router';
import { MovieList } from './pages/movie-list/movie-list';
import { Home } from './pages/home/home';
import { Blog } from './components/blog/blog';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'movies', component: MovieList},
    { path: 'blog', component: Blog},

    
];
