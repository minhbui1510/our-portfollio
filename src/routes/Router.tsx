import { motion, AnimatePresence } from 'framer-motion';
import { useRoutes, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const PortfolioList = lazy(() => import('../pages/PortfolioList'));
const PortfolioDetail = lazy(() => import('../pages/PortfolioDetail'));

const pageVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

function AnimatedRoutes() {
  const location = useLocation();

  const routes = [
    { path: '/', element: <PortfolioList /> },
    { path: '/:id', element: <PortfolioDetail /> },
  ];

  const element = useRoutes(routes, location);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Suspense fallback={
          <div className="flex justify-center items-center h-[50vh]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="w-8 h-8 border-2 border-[rgb(var(--primary))] border-t-transparent rounded-full"
            />
          </div>
        }>
          {element}
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Router() {
  return <AnimatedRoutes />;
}
