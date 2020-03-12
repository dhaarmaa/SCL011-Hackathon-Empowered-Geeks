[Exposed=Window]
interface SpeechRecognition : EventTarget {
    constructor();

    // recognition parameters
    attribute SpeechGrammarList grammars;
    attribute DOMString lang;
    attribute boolean continuous;
    attribute boolean interimResults;
    attribute unsigned long maxAlternatives;

    // methods to drive the speech interaction
    void start();
    void stop();
    void abort();

    // event methods
    attribute EventHandler onaudiostart;
    attribute EventHandler onsoundstart;
    attribute EventHandler onspeechstart;
    attribute EventHandler onspeechend;
    attribute EventHandler onsoundend;
    attribute EventHandler onaudioend;
    attribute EventHandler onresult;
    attribute EventHandler onnomatch;
    attribute EventHandler onerror;
    attribute EventHandler onstart;
    attribute EventHandler onend;
};

enum SpeechRecognitionErrorCode {
    "no-speech",
    "aborted",
    "audio-capture",
    "network",
    "not-allowed",
    "service-not-allowed",
    "bad-grammar",
    "language-not-supported"
};

[Exposed=Window]
interface SpeechRecognitionErrorEvent : Event {
    constructor(DOMString type, SpeechRecognitionErrorEventInit eventInitDict);
    readonly attribute SpeechRecognitionErrorCode error;
    readonly attribute DOMString message;
};

dictionary SpeechRecognitionErrorEventInit : EventInit {
    required SpeechRecognitionErrorCode error;
    DOMString message = "";
};

// Item in N-best list
[Exposed=Window]
interface SpeechRecognitionAlternative {
    readonly attribute DOMString transcript;
    readonly attribute float confidence;
};

// A complete one-shot simple response
[Exposed=Window]
interface SpeechRecognitionResult {
    readonly attribute unsigned long length;
    getter SpeechRecognitionAlternative item(unsigned long index);
    readonly attribute boolean isFinal;
};

// A collection of responses (used in continuous mode)
[Exposed=Window]
interface SpeechRecognitionResultList {
    readonly attribute unsigned long length;
    getter SpeechRecognitionResult item(unsigned long index);
};

// A full response, which could be interim or final, part of a continuous response or not
[Exposed=Window]
interface SpeechRecognitionEvent : Event {
    constructor(DOMString type, SpeechRecognitionEventInit eventInitDict);
    readonly attribute unsigned long resultIndex;
    readonly attribute SpeechRecognitionResultList results;
};

dictionary SpeechRecognitionEventInit : EventInit {
    unsigned long resultIndex = 0;
    required SpeechRecognitionResultList results;
};

// The object representing a speech grammar
[Exposed=Window]
interface SpeechGrammar {
    attribute DOMString src;
    attribute float weight;
};

// The object representing a speech grammar collection
[Exposed=Window]
interface SpeechGrammarList {
    constructor();
    readonly attribute unsigned long length;
    getter SpeechGrammar item(unsigned long index);
    void addFromURI(DOMString src,
                    optional float weight = 1.0);
    void addFromString(DOMString string,
                    optional float weight = 1.0);
};