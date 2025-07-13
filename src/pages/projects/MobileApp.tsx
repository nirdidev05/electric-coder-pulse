import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, Users, Zap, Star } from "lucide-react";
import { Link } from "react-router-dom";

const MobileApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Smartphone className="w-8 h-8 text-violet-500" />
              <span className="bg-violet-500/10 text-violet-500 px-4 py-2 rounded-full text-sm font-medium">
                Cross-Platform Mobile App
              </span>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-6"
            >
              Real-Time Social Collaboration Mobile Platform
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              A feature-rich mobile application supporting real-time collaboration, file sharing, 
              and social networking with 100K+ active users across iOS and Android platforms.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Article */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">
              {/* App Overview */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Application Overview</h2>
                <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    Developed a comprehensive mobile platform that combines real-time messaging, 
                    collaborative workspaces, and social networking features. The app maintains 
                    consistent user experience across iOS and Android with native performance.
                  </p>
                  
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-violet-500/5 rounded-lg">
                      <Users className="w-8 h-8 text-violet-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">100K+</div>
                      <div className="text-sm text-muted-foreground">Active Users</div>
                    </div>
                    <div className="text-center p-4 bg-blue-500/5 rounded-lg">
                      <Star className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">4.8</div>
                      <div className="text-sm text-muted-foreground">App Store Rating</div>
                    </div>
                    <div className="text-center p-4 bg-green-500/5 rounded-lg">
                      <Zap className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">50ms</div>
                      <div className="text-sm text-muted-foreground">Message Latency</div>
                    </div>
                    <div className="text-center p-4 bg-orange-500/5 rounded-lg">
                      <Smartphone className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">99.5%</div>
                      <div className="text-sm text-muted-foreground">Crash-Free Rate</div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Technical Architecture */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Technical Architecture</h2>
                <div className="space-y-8">
                  {/* Cross-Platform Development */}
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Cross-Platform Framework</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Built with React Native for maximum code reuse while maintaining native performance. 
                          Platform-specific optimizations ensure consistent UX across iOS and Android devices.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Code Sharing:</span>
                            <span className="text-violet-500 font-mono">85%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Bundle Size:</span>
                            <span className="text-violet-500 font-mono">12.5MB</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Startup Time:</span>
                            <span className="text-violet-500 font-mono">1.2s</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-foreground">Key Features</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div>• Native navigation performance</div>
                          <div>• Platform-specific UI components</div>
                          <div>• Hardware acceleration support</div>
                          <div>• Offline functionality</div>
                          <div>• Push notification integration</div>
                          <div>• Biometric authentication</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Real-time Features */}
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Real-Time Communication</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">WebSocket Infrastructure</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          Custom WebSocket implementation with automatic reconnection, 
                          message queuing, and presence indicators for seamless real-time experience.
                        </p>
                        <div className="text-xs space-y-1 text-muted-foreground">
                          <div>• Sub-50ms message delivery</div>
                          <div>• Automatic failover handling</div>
                          <div>• Message encryption end-to-end</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Collaborative Features</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          Real-time document editing, screen sharing, and voice/video calling 
                          with adaptive quality based on network conditions.
                        </p>
                        <div className="text-xs space-y-1 text-muted-foreground">
                          <div>• Operational transformation</div>
                          <div>• WebRTC integration</div>
                          <div>• Bandwidth optimization</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Code Implementation */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h3 className="text-2xl font-bold mb-6 text-foreground">Real-Time Messaging Implementation</h3>
                <div className="bg-card rounded-xl p-6 border border-border shadow-lg overflow-x-auto">
                  <pre className="text-sm text-muted-foreground">
                    <code>{`import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { useNetInfo } from '@react-native-async-storage/async-storage';

interface Message {
  id: string;
  content: string;
  senderId: string;
  timestamp: number;
  status: 'sending' | 'sent' | 'delivered' | 'read';
}

const useRealTimeMessaging = (roomId: string, userId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [typing, setTyping] = useState<string[]>([]);
  const socketRef = useRef<Socket | null>(null);
  const messageQueueRef = useRef<Message[]>([]);
  const netInfo = useNetInfo();

  useEffect(() => {
    // Initialize socket connection
    socketRef.current = io('wss://api.yourapp.com', {
      auth: { userId, roomId },
      transports: ['websocket'],
      upgrade: false,
      rememberUpgrade: false,
    });

    const socket = socketRef.current;

    // Connection handlers
    socket.on('connect', () => {
      setIsConnected(true);
      // Send queued messages when reconnected
      flushMessageQueue();
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    // Message handlers
    socket.on('message', (message: Message) => {
      setMessages(prev => [...prev, message]);
      // Mark as delivered
      socket.emit('message_delivered', { messageId: message.id });
    });

    socket.on('message_status', ({ messageId, status }) => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === messageId ? { ...msg, status } : msg
        )
      );
    });

    // Typing indicators
    socket.on('user_typing', ({ userId: typingUserId }) => {
      setTyping(prev => 
        prev.includes(typingUserId) ? prev : [...prev, typingUserId]
      );
    });

    socket.on('user_stopped_typing', ({ userId: typingUserId }) => {
      setTyping(prev => prev.filter(id => id !== typingUserId));
    });

    return () => {
      socket.disconnect();
    };
  }, [roomId, userId]);

  // Handle network changes
  useEffect(() => {
    if (netInfo.isConnected === false) {
      setIsConnected(false);
    } else if (netInfo.isConnected === true && socketRef.current) {
      socketRef.current.connect();
    }
  }, [netInfo.isConnected]);

  const sendMessage = (content: string) => {
    const message: Message = {
      id: generateUniqueId(),
      content,
      senderId: userId,
      timestamp: Date.now(),
      status: 'sending'
    };

    // Optimistically add to UI
    setMessages(prev => [...prev, message]);

    if (isConnected && socketRef.current) {
      socketRef.current.emit('send_message', message);
    } else {
      // Queue message for later
      message.status = 'sending';
      messageQueueRef.current.push(message);
    }
  };

  const flushMessageQueue = () => {
    if (socketRef.current && messageQueueRef.current.length > 0) {
      messageQueueRef.current.forEach(message => {
        socketRef.current!.emit('send_message', message);
      });
      messageQueueRef.current = [];
    }
  };

  const startTyping = () => {
    if (socketRef.current) {
      socketRef.current.emit('start_typing', { roomId });
    }
  };

  const stopTyping = () => {
    if (socketRef.current) {
      socketRef.current.emit('stop_typing', { roomId });
    }
  };

  return {
    messages,
    isConnected,
    typing,
    sendMessage,
    startTyping,
    stopTyping
  };
};

// React Native Component
const ChatScreen = ({ roomId, userId }) => {
  const { messages, isConnected, sendMessage, typing } = useRealTimeMessaging(roomId, userId);
  const [messageText, setMessageText] = useState('');

  const handleSend = () => {
    if (messageText.trim()) {
      sendMessage(messageText);
      setMessageText('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.connectionStatus}>
          {isConnected ? '🟢 Connected' : '🔴 Reconnecting...'}
        </Text>
      </View>
      
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MessageBubble message={item} isOwn={item.senderId === userId} />
        )}
      />
      
      {typing.length > 0 && (
        <TypingIndicator users={typing} />
      )}
      
      <MessageInput
        value={messageText}
        onChangeText={setMessageText}
        onSend={handleSend}
        onTyping={startTyping}
        onStopTyping={stopTyping}
      />
    </View>
  );
};`}</code>
                  </pre>
                </div>
              </motion.section>

              {/* Performance & Analytics */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Performance & User Analytics</h2>
                <div className="bg-gradient-to-r from-violet-500/5 to-purple-500/5 rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Technical Performance</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 99.5% crash-free sessions</li>
                        <li>• 1.2s average app startup time</li>
                        <li>• 50ms real-time message latency</li>
                        <li>• 85% code sharing between platforms</li>
                        <li>• 12.5MB optimized bundle size</li>
                        <li>• 60 FPS smooth animations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">User Engagement</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 100,000+ monthly active users</li>
                        <li>• 4.8/5 average app store rating</li>
                        <li>• 35 minutes average session duration</li>
                        <li>• 85% user retention after 30 days</li>
                        <li>• 10M+ messages sent daily</li>
                        <li>• 95% user satisfaction score</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Tech Stack */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">Technology Stack</h3>
                <div className="space-y-3">
                  {[
                    "React Native", "TypeScript", "Socket.io", "WebRTC", 
                    "Redux Toolkit", "Expo", "Firebase", "AWS"
                  ].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-violet-500 rounded-full" />
                      <span className="text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* App Performance */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">Performance Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Crash-Free Rate</span>
                      <span className="text-foreground">99.5%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-[99%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Load Time</span>
                      <span className="text-foreground">1.2s</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-[88%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">User Retention</span>
                      <span className="text-foreground">85%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* App Store Stats */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">App Store Performance</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">iOS Rating:</span>
                    <span className="text-foreground">4.8/5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Android Rating:</span>
                    <span className="text-foreground">4.7/5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Downloads:</span>
                    <span className="text-foreground">500K+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reviews:</span>
                    <span className="text-foreground">25,000+</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;