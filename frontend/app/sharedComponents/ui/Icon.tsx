
import {
    Home01Icon,
    Settings01Icon,
    UserIcon,
    ArrowRight01Icon,
    Menu01Icon,
    Search01Icon,
    InformationCircleIcon,
    CheckmarkCircle01Icon,
    AlertCircleIcon,
    Cancel01Icon,
    ViewIcon,
    ViewOffIcon,
    PackageIcon,
    Money03Icon,
    BookOpen01Icon,
    DashboardSquare01Icon,
    Folder01Icon,
    File01Icon,
    Download01Icon,
    PlayCircle02Icon,
    CodeIcon,
    Image01Icon,
    GithubIcon,
    DribbbleIcon,
    Linkedin01Icon,
    Database01Icon,
    Globe02Icon,
} from 'hugeicons-react';

/* 
  Mapping of icon names to components for easy string-based usage if needed, 
  or just export the wrapper to use with component directly.
  For this system, we'll allow passing the Icon Component or a name if we maintain a registry.
*/

export const ICONS = {
    home: Home01Icon,
    settings: Settings01Icon,
    user: UserIcon,
    arrowRight: ArrowRight01Icon,
    menu: Menu01Icon,
    search: Search01Icon,
    info: InformationCircleIcon,
    check: CheckmarkCircle01Icon,
    alert: AlertCircleIcon,
    "alert-circle": AlertCircleIcon,
    close: Cancel01Icon,
    visible: ViewIcon,
    hidden: ViewOffIcon,
    product: PackageIcon,
    pricing: Money03Icon,
    docs: BookOpen01Icon,
    dashboard: DashboardSquare01Icon,
    projects: Folder01Icon,
    file: File01Icon,
    download: Download01Icon,
    cplay: PlayCircle02Icon,
    code: CodeIcon,
    image: Image01Icon,
    github: GithubIcon,
    dribbble: DribbbleIcon,
    linkedin: Linkedin01Icon,
    server: Database01Icon, // Using Database icon for server context
    globe: Globe02Icon,
};

export type IconName = keyof typeof ICONS;

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name?: IconName;
    icon?: React.ElementType; // allow passing component directly
    size?: number | string;
    color?: string;
    className?: string;
}

/**
 * atomic icon component
 * Wraps HugeIcons. Default size 24px (tokens say 20px in system, updating default).
 */
export function Icon({
    name,
    icon: IconComponent,
    size = 20,
    color = "currentColor",
    className = "",
    ...props
}: IconProps) {

    const Component = IconComponent || (name ? ICONS[name] : null);

    if (!Component) {
        console.warn(`Icon "${name}" not found and no component provided.`);
        return null;
    }

    return (
        <Component
            size={size}
            color={color}
            className={`inline-block align-middle ${className}`}
            {...props}
        />
    );
}