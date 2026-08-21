import { motion } from 'framer-motion';
import {
    Code,
    Brain,
    Bot,
    Database,
    Palette,
    Cpu,
    FileCode,
    Layers,
    Smartphone,
    Monitor,
    Cloud,
    Globe,
    Zap,
    Users,
    Award,
    Server,
    Shield,
    Search,
    Camera,
    Headphones,
    Gamepad2,
    Rocket,
    Settings
} from 'lucide-react';

const CustomLoader = ({ isVisible }) => {
    // Inner ring icons (9 icons)
    const innerRingIcons = [
        Code, Brain, Bot, Database, Palette, Cpu, FileCode, Layers, Smartphone
    ];

    // Middle ring icons (6 icons)
    const middleRingIcons = [
        Monitor, Cloud, Globe, Zap, Users, Award
    ];

    // Outer ring icons (8 icons)
    const outerRingIcons = [
        Server, Shield, Search, Camera, Headphones, Gamepad2, Rocket, Settings
    ];

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
                {/* Profile Image - Center */}
                <motion.div
                    className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
                    animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <img
                        src="/MMS PIC.jpg"
                        alt="Mikran"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 hidden items-center justify-center text-white text-4xl font-bold">
                        M
                    </div>
                </motion.div>

                {/* Inner Ring - 9 icons */}
                {innerRingIcons.map((Icon, index) => {
                    const angle = (index * 40) * (Math.PI / 180);
                    const radius = 80; // Use consistent radius, CSS will handle responsiveness
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <motion.div
                            key={`inner-${index}`}
                            className="absolute w-6 h-6 sm:w-8 sm:h-8 text-blue-500"
                            style={{
                                left: '50%',
                                top: '50%',
                                marginLeft: '-12px',
                                marginTop: '-12px',
                            }}
                            animate={{
                                x: [x, x],
                                y: [y, y],
                                rotate: [0, 360],
                            }}
                            transition={{
                                rotate: {
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: 'linear',
                                },
                            }}
                        >
                            <Icon className="w-full h-full drop-shadow-lg" />
                        </motion.div>
                    );
                })}

                {/* Middle Ring - 6 icons */}
                {middleRingIcons.map((Icon, index) => {
                    const angle = (index * 60) * (Math.PI / 180);
                    const radius = 100; // Use consistent radius
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <motion.div
                            key={`middle-${index}`}
                            className="absolute w-5 h-5 sm:w-6 sm:h-6 text-purple-500"
                            style={{
                                left: '50%',
                                top: '50%',
                                marginLeft: '-10px',
                                marginTop: '-10px',
                            }}
                            animate={{
                                x: [x, x],
                                y: [y, y],
                                rotate: [0, -360],
                            }}
                            transition={{
                                rotate: {
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: 'linear',
                                },
                            }}
                        >
                            <Icon className="w-full h-full drop-shadow-lg" />
                        </motion.div>
                    );
                })}

                {/* Outer Ring - 8 icons */}
                {outerRingIcons.map((Icon, index) => {
                    const angle = (index * 45) * (Math.PI / 180);
                    const radius = 120; // Use consistent radius
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <motion.div
                            key={`outer-${index}`}
                            className="absolute w-4 h-4 sm:w-5 sm:h-5 text-cyan-500"
                            style={{
                                left: '50%',
                                top: '50%',
                                marginLeft: '-8px',
                                marginTop: '-8px',
                            }}
                            animate={{
                                x: [x, x],
                                y: [y, y],
                                rotate: [0, 360],
                            }}
                            transition={{
                                rotate: {
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: 'linear',
                                },
                            }}
                        >
                            <Icon className="w-full h-full drop-shadow-lg" />
                        </motion.div>
                    );
                })}

                {/* Loading Text */}
                <motion.div
                    className="absolute -bottom-8 sm:-bottom-12 text-center w-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <p className="text-base sm:text-lg font-semibold text-foreground"></p>
                </motion.div>

                {/* Orbital Rings */}
                <motion.div
                    className="absolute w-40 h-40 sm:w-52 sm:h-52 border border-blue-500/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute w-52 h-52 sm:w-72 sm:h-72 border border-purple-500/20 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute w-64 h-64 sm:w-96 sm:h-96 border border-cyan-500/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />
            </div>
        </motion.div>
    );
};

export default CustomLoader;